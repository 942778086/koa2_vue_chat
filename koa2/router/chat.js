const router = require('koa-router')()
// import userService from '../server/userService'
const userController = require('../server/controller/userController')
const baseController = require('../server/common/baseController')

/**
 * 列表查询
 * @type {Router}
 */
module.exports = router.get('/getAll', (ctx)=>{ return baseController.getAll('chat',ctx) })

/**
 * 主键查询
 * @type {Router}
 */
module.exports = router.get('/getChat', (ctx) => { return baseController.getById('chat', ctx) })

/**
 * 新建记录
 * @type {Router}
 */
module.exports = router.post('/newChat', (ctx) => { return baseController.addRecord('chat', ctx) })

/**
 * 修改记录
 * @type {Router}
 */
module.exports = router.put('/editChat', (ctx) => { return baseController.updateRecord('chat', ctx) })

/**
 * 删除记录
 * @type {this}
 */
module.exports = router.delete('/deleteChat', (ctx) => { return baseController.deleteById('chat', ctx) })

/**
 * 根据id列表批量删除记录
 * @type {Router}
 */
module.exports = router.post('/mulDeleteChat', (ctx) => { return baseController.deleteByArr('chat', ctx) })

/**
 * 条件查询
 * @type {Router}
 */
module.exports = router.post('/getChatByFileds', (ctx) => { return baseController.getByFields('chat', ctx) })

/**
 * 模糊查询
 * @type {Router}
 */
module.exports = router.post('/getChatByLikeFileds', (ctx) => { return baseController.getByLike('chat', ctx) })
