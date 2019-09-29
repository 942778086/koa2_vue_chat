const query = require('../db')
const config = require('../../config')

module.exports = baseDao = {
    // 分页
    getAll (page, tableName) {
        const num = (page - 1)*config.commonPageSize
        return query(`select * from ${tableName} limit ${num},${config.commonPageSize}`)
    },
    // 非主键查询 + 分页
    selectByFields (page, tableName, field) {
        const num = (page - 1)*config.commonPageSize
        return query(`select * from ${tableName} where ${field} limit ${num},${config.commonPageSize}`)
    },
    // 模糊查询 + 分页
    getByLike (page, tableName, key, value) {
        const num = (page - 1)*config.commonPageSize
        return query(`SELECT * FROM ${tableName} WHERE ${key} LIKE '%${value}%' limit ${num},${config.commonPageSize}`)
    },
    // 获取总数
    getCount (tableName) {
        return query('SELECT COUNT(*) as count FROM ' + tableName)
    },
    // 主键查询
    getById (id,tableName) {
        return query(`select * from ${tableName} where id =${id}`)
    },
    // 新增记录
    addRecord (keys, values, tableName) {
        return query(`insert into ${tableName}(${keys}) values(${values});`)
    },
    //修改记录
    updateRecord (sql, tableName, id) {
        return query(`update ${tableName} set ${sql} where id=${id};`)
    },
    // 主键删除
    deleteById(id, tableName) {
        return query(`DELETE FROM ${tableName} WHERE id=${id};`)
    }
}
