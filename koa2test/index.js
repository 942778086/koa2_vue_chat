const Koa = require('koa')
const app = new Koa()
// 跨域中间件
const cors = require('koa2-cors')
// 日志中间件
const loggerGenerator = require('./middleware/logger-generator')
const logAsync = require('./middleware/log-async')
// 路由
const router = require('./router/index')
const convert = require('koa-convert')
const config = require('./config')
const bodyparse = require('koa-bodyparser')

app.use(bodyparse())
app.use(cors())
app.use(convert(loggerGenerator()))
app.use(logAsync())
app.use(router.routes()).use(router.allowedMethods())

app.use( async (ctx) => {
    ctx.body = router
})
app.listen(config.port)
