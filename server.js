const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const httpProxy = require('http-proxy');
const RouterServer = require('./server/index')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const server = new RouterServer()
const proxy = httpProxy.createProxyServer({
  cookieDomainRewrite: {
    '*': ''
  },
  target: 'http://test-bg-td.teddymobile.cn',
  changeOrigin: true
})

server.router('/case/:type', (req, res) => {
  app.render(req, res, '/case', req.query)
})
server.router('/api', (req, res) => {
  proxy.web(req, res);
})
server.router(/.*/, (req, res) => {
  const parsedUrl = parse(req.url, true)
  handle(req, res, parsedUrl)
})


app.prepare().then(() => {
  server.listen(3008, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:3008; App mode: ${process.env.NODE_ENV}`)
  })

  // createServer((req, res) => {
  //   // Be sure to pass `true` as the second argument to `url.parse`.
  //   // This tells it to parse the query portion of the URL.
  //   const parsedUrl = parse(req.url, true)
  //   const {pathname, query} = parsedUrl
  //
  //   if (pathname === '/case/1') {
  //     app.render(req, res, '/case', query)
  //   }else {
  //     handle(req, res, parsedUrl)
  //   }
  // }).listen(3000, err => {
  //   if (err) throw err
  //   console.log(`> Ready on http://localhost:3000 App mode ${process.env.NODE_ENV}`)
  // })
})
