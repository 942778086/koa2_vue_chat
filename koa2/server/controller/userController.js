const userService = require('../service/userService')

    let userController = {
    /*
    * 获取所有用户信息
    *
    * */
    getAll: async function (ctx) {
        const page = ctx.request.query.page
        ctx.body = await userService.getAll(page)
    },
    /*
    *获取单个用户
    *
     */
    getUser: async function (ctx) {
        const id = ctx.request.query.id
        ctx.body = await userService.getUser(id)
    },
    /*
    *新建用户
    *
    */
    newUser: async function (ctx) {
        let postData = await ctx.request.body
        ctx.body = await userService.newUser(postData)
    },
    /*
    *编辑用户
    *
    */
    editUser: async function(ctx) {
        let putData = await ctx.request.body
        ctx.body = await userService.editUser(putData)
    },
    /*
    *删除用户
    *
    */
    deleteUser: async function(ctx) {
        let id = ctx.request.query.id
        ctx.body = await userService.deleteUser(id)
    }
}
module.exports = userController
