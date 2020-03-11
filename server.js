const next = require('next')
const httpProxy = require('http-proxy');
const cookie = require('cookie')
const {parse} = require('url')

const RouterServer = require('./server/router-server')
// const loginServer = require('./server/login')
// const {SESSION_KEY, baseAPI} = require('./server/config')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
// const handle = app.getRequestHandler()

const server = new RouterServer()

// proxy config
// const proxy = httpProxy.createProxyServer({
//   cookieDomainRewrite: {
//     '*': ''
//   },
//   target: baseAPI,
//   changeOrigin: true
// });
// proxy.on('proxyReq', function(proxyReq, req) {
//   const cookies = cookie.parse(req.headers.cookie || '')
//   proxyReq.setHeader('token', cookies[SESSION_KEY] || '');
// });

// if (dev && process.env.USE_MOCK === 'mock') {
//   const useMock = require('./mock')
//   server.onRequest(useMock)
// }
// API
// server.router('/api', (req, res) => {
//   proxy.web(req, res);
// })

// render
// server.router('/goods/:id', (req, res) => {
//   app.render(req, res, '/goods', req.query)
// })
// server.router(/.*/, (req, res) => {
//   const parsedUrl = parse(req.url, true)
//   handle(req, res, parsedUrl)
// })

// start server
app.prepare().then(() => {
  server.listen(3000, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:3000; App mode: ${process.env.HHB_FE_MODE}`)
  })
})
