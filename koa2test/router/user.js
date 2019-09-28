const router = require('koa-router')()
// import userService from '../server/userService'
const userController = require('../server/controller/userController')
const baseController = require('../server/common/baseController')

module.exports = router.get('/getAll', (ctx)=>{ return baseController.getAll('user',ctx) })

module.exports = router.get('/getUser', (ctx) => { return baseController.getById('user', ctx) })

module.exports = router.post('/newUser', (ctx) => { return baseController.addRecord('user', ctx) })

module.exports = router.put('/editUser', (ctx) => { return baseController.updateRecord('user', ctx) })

module.exports = router.delete('/deleteUser', (ctx) => { return baseController.deleteById('user', ctx) })

// module.exports = router.get('/getAll', userController.getAll)
//
// module.exports = router.get('/getUser', userController.getUser)
//
// module.exports = router.post('/newUser', userController.newUser)
//
// module.exports = router.put('/editUser', userController.editUser)
//
// module.exports = router.delete('/deleteUser', userController.deleteUser)
