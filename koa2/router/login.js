const router = require('koa-router')()
const config = require('../config')
const baseService = require('../server/common/baseService')
const jwt = require('jsonwebtoken')

module.exports = router.post('/', (ctx)=>{ return login(ctx) })


const login = async function (ctx) {
    const res = await baseService.getByFields('user', ctx)
    const token = jwt.sign({
        name: res.name,
    },
        config.token,
        { expiresIn: '2h' });
    if (res[0].pwd === ctx.request.body.pwd) {
        ctx.body = {
            msg: 'success',
            token: token
        }
        return ctx
    } else {
        ctx.body = '密码都输不对？'
    }
}
