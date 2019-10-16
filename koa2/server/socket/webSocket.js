const baseService = require('../common/baseService')

module.exports = socketFunc = (socket) => {
    socket.on('newConnect', (data) => {
        let ctx = {
            request: {
                body: {
                    id: data.id,
                    socket_id: socket.id
                }
            }
        }
        baseService.updateRecord('user', ctx)
    })
    socket.on('req', async (data) => {
        let socketId = JSON.parse(JSON.stringify(await baseService.getById(data.msg.receive_id, 'user')))[0].socket_id
        let ctx = {
            request: {
                body: data.msg
            }
        }
        let reqCtx = {
            request: {
                body: {
                    send_id: data.msg.send_id,
                    receive_id: data.msg.receive_id
                }
            }
        }
        let resCtx = {
            request: {
                body: {
                    send_id: data.msg.receive_id,
                    receive_id: data.msg.send_id
                }
            }
        }
        await baseService.addRecord('chat', ctx)
        let sendData = await baseService.getByFields('chat', reqCtx)
        let receiveData = await baseService.getByFields('chat', resCtx)
        let chatList = sendData.concat((receiveData))
        chatList.sort(function (a,b) {
            return a.send_time > b.send_time ? 1: -1
        })
        socket.to(socketId).emit('res', chatList)
    });
}
