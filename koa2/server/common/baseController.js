const baseService = require('./baseService')

module.exports = baseController =  {
    /**
     * 获取分页列表
     * @param tableName
     * @param ctx
     * @returns {Promise<void>}
     */
    async getAll (tableName, ctx)  {
        const page = ctx.request.query.page
        ctx.body = await baseService.getAll(page, tableName)
    },
    /**
     * 主键查询
     * @param tableName
     * @param ctx
     * @returns {Promise<void>}
     */
    async getById (tableName, ctx) {
        const id = ctx.request.query.id
        ctx.body = await baseService.getById(id, tableName)
    },
    /**
     * 非主键查询(多条件查询)
     * @param tableName
     * @param ctx
     * @returns {Promise<void>}
     */
    async getByFields (tableName, ctx) {
        ctx.body = await baseService.getByFields(tableName, ctx)
    },
    /**
     * 非主键查询（模糊查询）
     * @param tableName
     * @param ctx
     * @returns {Promise<void>}
     */
    async getByLike (tableName, ctx) {
        ctx.body = await baseService.getByLike(tableName, ctx)
    },
    /**
     * 新增记录
     * @param tableName
     * @param ctx
     * @returns {Promise<void>}
     */
    async addRecord (tableName, ctx) {
        let keysArr = Object.keys(ctx.request.body)
        let valuesArr = [];
        for (const property in ctx.request.body) {
            if (typeof(ctx.request.body[property]) === 'string') {
                valuesArr.push('\'' + ctx.request.body[property] + '\'')
            } else {
                valuesArr.push(ctx.request.body[property])
            }
        }
        const keys = keysArr.join(',')
        const values = valuesArr.join(',')
        ctx.body = await baseService.addRecord(keys, values, tableName)
    },
    /**
     * 修改记录
     * @param tableName
     * @param ctx
     * @returns {Promise<void>}
     */
    async updateRecord (tableName, ctx) {
        let keysArr = Object.keys(ctx.request.body)
        let valuesArr = []
        for (const property in ctx.request.body) {
            if (typeof(ctx.request.body[property]) === 'string') {
                valuesArr.push('\'' + ctx.request.body[property] + '\'')
            } else {
                valuesArr.push(ctx.request.body[property])
            }
        }
        let sqlArr = []
        let id = ctx.request.body.id
        for (let i = 0;i<keysArr.length;i++) {
            if (i === keysArr.length - 1) {
                sqlArr[i] = keysArr[i] + '=' + valuesArr[i]
            } else {
                sqlArr[i] = keysArr[i] + '=' + valuesArr[i] + ','
            }
        }
        const sql = sqlArr.join('')
        ctx.body = await baseService.updateRecord(sql, tableName, id)
    },
    /**
     * 根据主键删除
     * @param tableName
     * @param ctx
     * @returns {Promise<void>}
     */
    async deleteById (tableName, ctx) {
        const id = ctx.request.query.id
        ctx.body = await baseService.deleteById(id, tableName)
    },
    /**
     * 根据id数组批量删除
     * @param tableName
     * @param ctx
     * @returns {Promise<void>}
     */
    async deleteByArr (tableName, ctx) {
        let res
        for (let i = 0; i < ctx.request.body.arr.length; i++) {
            res =  await baseService.deleteById(ctx.request.body.arr[i], tableName)
        }
        ctx.body = res
    }
}
