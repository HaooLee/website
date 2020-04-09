const {createServer} = require('http')
const {parse} = require('url')

class RouterServer {
  constructor () {
    this.routerMatch = []
    this.requestCallbacks = []
    this._server = createServer()
    this._server.on('request', (req, res) => {
      this._onRequest(req, res)
    })
    this.catchError()
  }

  _onRequest (req, res) {
    const parsedUrl = parse(req.url, true)
    const {pathname, query} = parsedUrl
    req.query = query
    this.requestCallbacks.forEach(cb => cb(req, res))
    for (let i = 0; i < this.routerMatch.length; i++) {
      const {reg, callback, paramsKey} = this.routerMatch[i];
      if (reg.test(pathname)) {
        if (paramsKey.length > 0) {
          pathname.replace(reg, (_, ...params) => {
            req.params = paramsKey.reduce((obj, k, i) => ({...obj, [k]: params[i]}), {})
          })
        }
        callback(req, res)
        return
      }
    }
    res.writeHead(404, {})
    res.end('not found')
  }

  onRequest (callback) {
    if (typeof callback !== 'function') throw new Error('callback must be a function')
    this.requestCallbacks.push(callback)
  }

  router (path, callback) {
    let reg = null
    let paramsKey = []
    switch (typeof path) {
      case 'string':
        const paramMatch = path.match(/\/:(\w+)\b/g)
        console.log(paramMatch)
        if (paramMatch) {
          paramsKey = paramMatch.map(i => i.slice(2))
          reg = new RegExp(`^${path.replace(/\/:\w+\b/g, '\/(\\w+)?')}`)
        } else {
          reg = new RegExp(`^${path}`)
        }
        break;
      case 'object':
        if (path instanceof RegExp) {
          reg = path
        }
        break;
      default:
        throw new Error('"path" must be String or RegExp')
        return
    }
    if (typeof callback !== 'function') {
      throw new Error('"callback" must be Function')
      return
    }
    this.routerMatch.push({
      path,
      reg,
      paramsKey,
      callback
    })
  }

  catchError () {
    process.on('uncaughtException', (err, origin) => {
      this.onError(err, origin)
    })
  }

  onError (err, origin) {
    console.error('[未捕获异常] ', err)
    process.exit(1)
  }

  listen (...args) {
    this._server.listen(...args)
  }
}

module.exports = RouterServer
