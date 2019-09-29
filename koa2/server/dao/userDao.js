const query = require('../db')

const userDao = {
     getAll (page) {
         const num = (page -1)*6
         return query(`select * from user limit ${num},6`)
    },
    getUser (id) {
         return query(`select * from user where id = ${id};`)
    },
    newUser (data) {
         return query(`insert into user(id,name,age,address) values(0,'${data.name}',${data.age},'${data.address};')`)
    },
    editUser (data) {
        return query(`update user set name='${data.name}',age=${data.age},address='${data.address}' where id=${data.id};`)
    },
    deleteUser (id) {
         return query(`DELETE FROM user WHERE id=${id};`)
    },
    getCount () {
         return query('SELECT COUNT(*) FROM user')
    }
}

module.exports = userDao
