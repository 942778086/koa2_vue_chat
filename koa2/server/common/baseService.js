const baseDao = require('./baseDao')
const tool = require('../../../vue/src/tools/tool')

module.exports = baseService = {
    /**
     * 分页查询
     * @param page
     * @param tableName
     * @returns {Promise<void>}
     */
    async getAll (page, tableName) {
        let data = {}
        data.data = await baseDao.getAll(page, tableName)
        await baseDao.getCount(tableName)
            .then(res => {
                data.count = res[0].count
            })
        return data
    },
    /**
     * 主键查询
     * @param id
     * @param tableName
     * @returns {Promise<*|void>}
     */
    async getById (id, tableName) {
        return baseDao.getById(id, tableName)
    },
    /**
     * 非主键查询（条件查询）
     * @param tableName
     * @param ctx
     * @returns {Promise<unknown>}
     */
    async getByFields (tableName, ctx) {
        let page
        if (ctx.request.body.page) {
            page = ctx.request.body.page
        } else {
            page = 1
        }
        let req = ctx.request.body
        let keysArr = Object.keys(req)
        let valuesArr = []
        for (const property in req) {
            valuesArr.push(req[property])
        }
        let field = ''
        if (keysArr.indexOf('page') === -1) {
            for (let i = 0; i<keysArr.length; i++) {
                // 最后一项不加AND
                if (i === keysArr.length - 1) {
                    // varchar/char 有引号包裹
                    if (typeof valuesArr[i] === 'string') {
                        field = field + keysArr[i] + '=' + '\'' + valuesArr[i] + '\''
                    } else {
                        field = field + keysArr[i] + '=' + valuesArr[i]
                    }
                } else {
                    if (typeof valuesArr[i] === 'string') {
                        field = field + keysArr[i] + '=' + '\'' + valuesArr[i] + '\'' + ' ' + 'AND' + ' '
                    } else {
                        field = field + keysArr[i] + '=' + valuesArr[i] + ' ' + 'AND' + ' '
                    }
                }
            }
        } else {
            for (let i = 0; i<keysArr.length; i++) {
                if (i === keysArr.length - 2) {
                    // varchar/char 有引号包裹
                    if (typeof valuesArr[i] === 'string') {
                        field = field + keysArr[i] + '=' + '\'' + valuesArr[i] + '\''
                        break
                    } else {
                        field = field + keysArr[i] + '=' + valuesArr[i]
                        break
                    }
                } else {
                    if (typeof valuesArr[i] === 'string') {
                        field = field + keysArr[i] + '=' + '\'' + valuesArr[i] + '\'' + 'AND'
                    } else {
                        field = field + keysArr[i] + '=' + valuesArr[i] + 'AND'
                    }
                }
            }
        }
        return baseDao.selectByFields(page, tableName, field)
    },
    /**
     * 模糊查询
     * @param tableName
     * @param ctx
     * @returns {Promise<void>}
     */
    async getByLike (tableName, ctx) {
        let page
        let data = {}
        if (ctx.request.body.page) {
            page = ctx.request.body.page
        } else {
            page = 1
        }
        let key = Object.keys(ctx.request.body)[0]
        let value = ctx.request.body[key]
        await baseDao.getCount(tableName)
            .then(res => {
                data.count = res[0].count
            })
        data.data = await baseDao.getByLike(page, tableName, key, value)
        return data
    },
    /**
     * 新增记录
     * @param keys
     * @param values
     * @param tableName
     * @returns {Promise<unknown>}
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
        return baseDao.addRecord(keys, values, tableName)
    },
    /**
     * 修改记录
     * @param tableName
     * @param ctx
     * @returns {Promise<unknown>}
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
        return baseDao.updateRecord(sql, tableName, id)
    },
    /**
     * 主键删除
     * @param id
     * @param tableName
     * @returns {Promise<unknown>}
     */
    async deleteById(id, tableName) {
        return baseDao.deleteById(id, tableName)
    }

}
