const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = verify = (ctx) => {
    const token = ctx.req.headers.authorization
    try {
        jwt.verify(token, config.token)
        return 'true'
    } catch (e) {
        console.log(e)
        return 'false'
    }
}
