const baseDao = require('./baseDao')

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
        // data.count = await baseDao.getCount(tableName)
        await baseDao.getCount(tableName)
            .then(res => {
                console.log(res)
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
     * 新增记录
     * @param keys
     * @param values
     * @param tableName
     * @returns {Promise<unknown>}
     */
    async addRecord (keys, values, tableName) {
        return baseDao.addRecord(keys, values, tableName)
    },
    /**
     * 修改记录
     * @param sql
     * @param tableName
     * @returns {Promise<*>}
     */
    async updateRecord (sql, tableName, id) {
        return baseDao.updateRecord(sql, tableName, id)
    },

    async deleteById(id, tableName) {
        return baseDao.deleteById(id, tableName)
    }

}
