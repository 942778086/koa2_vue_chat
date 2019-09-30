const router = require('koa-router')()

const user = require('./user')
const login = require('./login')

router.use('/user', user.routes(), user.allowedMethods())

router.use('/login', login.routes(), login.allowedMethods())

module.exports = router
