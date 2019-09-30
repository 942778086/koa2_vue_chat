const Koa = require('koa')
const app = new Koa()
// 跨域中间件
const cors = require('koa2-cors')
// 日志中间件
const logAsync = require('./middleware/log-async')
// 路由
const router = require('./router/index')
// 中间件插件
const convert = require('koa-convert')
// 配置
const config = require('./config')
// 读取对象插件
const bodyparse = require('koa-bodyparser')
// jwt
const jwt = require('jsonwebtoken')

app.use(bodyparse())
app.use(cors())
app.use(logAsync())
app.use(router.routes()).use(router.allowedMethods())
app.use( async (ctx) => {
    ctx.body = router
})
app.use((ctx) => {
    const token = ctx.request.header.authorization
    if (ctx.URL.pathname !== '/login') {
        console.log(token)
        console.log(config.token)
        jwt.verify(token, config.token, (error) => {
            error ? ctx.body = 'wrong' : next();
        });
    }
    console.log('out', token)
    console.log('out', config.token)
})

app.listen({ port: config.port }, () =>
    console.log(`🚀 Server ready at http://localhost:${config.port}`),
);
