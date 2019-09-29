const userDao = require('../dao/userDao')

const userService = {
    getAll : async function (page) {
        let data = {}
        data.data = await userDao.getAll(page)
        data.count = await userDao.getCount()
        return data
    },
    getUser: function (id) {
         return userDao.getUser(id)
    },
    newUser: function (data) {
        return userDao.newUser(data)
    },
    editUser: function (data) {
        return userDao.editUser(data)
    },
    deleteUser: function (id) {
        return userDao.deleteUser(id)
    }
}

module.exports = userService
