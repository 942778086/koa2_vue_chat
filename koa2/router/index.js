const router = require('koa-router')()

const login = require('./login')
const user = require('./user')
const upload = require('./upload')
const verify = require('../middleware/verify')

router.use('/user', async (ctx, next)=> {
    if (ctx.originalUrl !== '/login'){
        if (await verify(ctx) === 'true'){
            await next()
        } else {
            ctx.body = 'wrong token'
        }
    }
})
router.use('/user', user.routes(), user.allowedMethods())

router.use('/login', login.routes(), login.allowedMethods())

router.post('/upload/ava', (ctx, next) => {
    return upload(ctx, next)
})

module.exports = router
