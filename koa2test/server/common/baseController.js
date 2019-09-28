const baseService = require('./baseService')

module.exports = baseController =  {
    /**
     * 分页查询
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
        await baseService.addRecord(keys, values, tableName)
    },
    /**
     * 修改记录
     * @param tableName
     * @param ctx
     * @returns {Promise<void>}
     */
    async updateRecord (tableName, ctx) {
        let keysArr = Object.keys(ctx.request.body)
        let valuesArr = [];
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
        await baseService.updateRecord(sql, tableName, id)
    },
    /**
     * 根据主键删除记录
     */
    async deleteById (tableName, ctx) {
        const id = ctx.request.query.id
        ctx.body = await baseService.deleteById(id, tableName)
    }
}
