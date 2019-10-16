const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')
const logAsync = require('./middleware/log-async')
const router = require('./router/index')
const convert = require('koa-convert')
const config = require('./config')
const bodyparse = require('koa-bodyparser')
const server = require('koa-static')
const ioServer = require('http').Server(app)
const io = require('socket.io')(ioServer)
const socketFunc = require('./server/socket/webSocket')

// 获取前端对象
app.use(bodyparse())
// 跨域
app.use(cors())
// 日志中间件
app.use(logAsync())
// 静态资源服务器
app.use(server(__dirname, '/upload'))
// 挂载路由
app.use(router.routes()).use(router.allowedMethods())
// websocket 服务器
io.on('connection', (socket) => {
    socketFunc(socket)
})
// app端口
app.listen({ port: config.port }, () =>
    console.log(`🚀 Server ready at http://localhost:${config.port}`),
)
// websocket 端口
ioServer.listen(config.wsPort, () => {
    console.log(`🚀 WebSocket Server is running at http://localhost:${config.wsPort}`)
})
