<template>
    <div class="chatPage">
        <div class="phoneBG">
            <div class="mainRoom">
                <div class="header">{{ name }}
                </div>
                <div class="body">
                    <div class="chatRoom" v-for="(item, index) in chatList" :key="index">
                        <div class="avaRoom"><img class="friendAva" alt=""
                                                  :src="friendAva"
                                                  v-if="item.send_id === msg.receive_id"/></div>
                        <div class="chatBody">{{ item.content }}</div>
                        <div class="avaRoom"><img class="myAva"
                             :src="avatar"
                                  v-if="item.send_id === msg.send_id"/></div>
                    </div>
                </div>
                <div class="foot">
                    <Input style="width: 80%" placeholder="chat now..." v-model="msg.content" />
                    <Button type="default" ghost @click="sendMsg">发送</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const url = 'http://localhost:3001/chat'
    import tool from '../tools/tool'

    export default {
        name: "chat",
        data() {
            return {
                fromId: 0,
                toId: 0,
                friendAva: '',
                name: '',
                msg: {
                    id: 0,
                    send_id: 1,
                    receive_id: 1,
                    send_time: tool.formatTime(new Date()),
                    content: ''
                },
                chatList: [],
                sendList: [],
                receiveList: []
            }
        },
        sockets: {
            connect: function () {
                this.newConnect()
            },
            res: function (data) {
                console.log(data)
                this.chatList = data
            }
        },
        computed: {
            sendData() {
                return {
                    send_id: this.$store.state.userInfo.id,
                    receive_id: this.$route.query.id
                }
            },
            receiveData() {
                return {
                    send_id: this.$route.query.id,
                    receive_id: this.$store.state.userInfo.id
                }
            }
        },
        created() {
            this.msg.send_id = this.$store.state.userInfo.id
            this.msg.receive_id = parseInt(this.$route.query.id)
            this.name = this.$route.query.name
            this.friendAva = this.$route.query.friendAva
            this.avatar = this.$store.state.userInfo.avatar
            this.getSend()
            this.$socket.emit('newConnect', {id: this.$store.state.userInfo.id})
        },
        methods: {
            sendMsg () {
                this.msg.content = ''
                this.msg.send_time = tool.formatTime(new Date())
                this.$socket.emit('req', {id: this.$socket.id,msg: this.msg})
                this.getSend()
            },
            getSend () {
                this.$axios.post(url + '/getChatByFileds', this.sendData)
                    .then(res => {
                        this.sendList = res.data
                        this.getReceive()
                    })
            },
            getReceive() {
                this.$axios.post(url + '/getChatByFileds', this.receiveData)
                    .then(res => {
                        this.receiveList = res.data
                        this.chatList = this.sendList.concat(this.receiveList)
                        this.chatList.sort(function (a,b) {
                            return a.send_time > b.send_time ? 1: -1
                        })
                    })
            },
            newConnect() {
                this.$socket.emit('newConnect', {id: this.$store.state.userInfo.id})
            }
        }
    }
</script>

<style scoped>
    .chatPage{
        position: absolute;
        min-width: 100%;
        height: 100%;
        background-color: #ebebeb;
    }
    .phoneBG{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        width: 1021px;
        height: 976px;
        background-image: url("../../static/img/phone.jpg");
        background-position: center;
        margin: 0 auto;
    }
    .mainRoom{
        width: 317px;
        height: 561px;
        margin: 232px auto 0 auto;
        background: linear-gradient(#bbd7ff, rgba(76, 102, 124, 0.41));
        border: 1px solid #15305b;
        scroll-y: auto;
        border-radius: 1px;
    }
    .header{
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        background-color: #4c667c;
        color: white;
    }
    .body{
        width: 100%;
        height: 471px;
    }
    .foot{
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: #4c667c;
    }
    .chatRoom{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        margin: 0 auto 8px auto;
    }
    .avaRoom{
        width: 50px;
        height: 50px;
    }
    .myAva{
        width: 50px;
        margin-right: 8px;
        border-radius: 50%;
        border: 1px solid #4c667c;
    }
    .friendAva{
        width: 50px;
        margin-left: 8px;
        border-radius: 50%;
        border: 1px solid #4c667c;
    }
    .chatBody{
        width: 217px;
        padding-top: 15px;
    }
</style>
