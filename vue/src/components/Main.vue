<template>
    <div class="hello">
        <div class="header">
            <img :src="ava" class="ava" />
            <p>欢迎, {{ myName }}</p>
        </div>
        <div class="btnRoom">
            <Button type="primary" class="headerBtn" @click="newUserModal = true">新增记录</Button>
            <Button type="primary" class="headerBtn" @click="mulDelete">批量删除</Button>
            <Input v-model="searchContent" placeholder="搜索..." style="width: 300px;margin:auto 0 auto 500px" />
            <Button type="primary" class="headerBtn" @click="search" style="margin-left: 0">搜索记录</Button>
        </div>
        <div class="tableRoom">
            <Table border ref="selection" :columns="tableCol" :data="tableData" @on-selection-change="getSelect"></Table>
            <Page :total="total" :page-size="pageSize" @on-change="jumpPage" />
        </div>
        <!--新增用户弹框-->
        <Modal
                v-model="newUserModal"
                title="新建用户"
                @on-ok="addUser"
                @on-cancel="newUserModal = false">
            <Form :model="newUserForm" label-position="left" :label-width="100">
                <FormItem label="姓名">
                    <Input v-model="newUserForm.name" />
                </FormItem>
                <FormItem label="年龄">
                    <Input v-model="newUserForm.age" />
                </FormItem>
                <FormItem label="地址">
                    <Input v-model="newUserForm.address" />
                </FormItem>
                <FormItem label="签名">
                    <Input v-model="editUserForm.sign" />
                </FormItem>
                <FormItem label="上传头像">
                    <Upload
                            :data='uploadData'
                            :on-success="uploadSuccess"
                            type="drag"
                            action="http://localhost:3001/upload/ava">
                        <div style="padding: 20px 0">
                            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                            <p>点击或拖动上传</p>
                        </div>
                    </Upload>
                </FormItem>
            </Form>
        </Modal>
        <!--修改用户弹框-->
        <Modal
                v-model="editUserModal"
                title="修改信息"
                @on-ok="editUser"
                @on-cancel="editUserModal = false">
            <Form :model="editUserForm" label-position="left" :label-width="100">
                <FormItem label="姓名">
                    <Input v-model="editUserForm.name" />
                </FormItem>
                <FormItem label="年龄">
                    <Input v-model="editUserForm.age" />
                </FormItem>
                <FormItem label="地址">
                    <Input v-model="editUserForm.address" />
                </FormItem>
                <FormItem label="签名">
                    <Input v-model="editUserForm.sign" />
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>

<script>
const tool = require('../tools/tool')
    const url = 'http://localhost:3001/user'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                pageSize: 6,
                page: 1,
                msg: 'Welcome to Your Vue.js App',
                searchContent: '',
                select: [],
                newUserModal: false,
                editUserModal: false,
                total: 10,
                arr: [],
                uploadData: {
                    url: '',
                    articleId: ''
                },
                newUserForm: {
                    id: 0,
                    name: '',
                    age: '',
                    address: '',
                    avatar: '',
                    reg_day: '2019-10-10 00:00:00',
                    sign: '还没有签名'
                },
                editUserForm: {
                    id: 0,
                    name: '',
                    age: '',
                    address: '',
                    reg_day: '',
                    sign: ''
                },
                tableCol: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'ava',
                        key: 'avatar',
                        width: 70,
                        render: (h, params) => {
                            return h('img', {
                                attrs: {
                                    src: params.row.avatar
                                },
                                style: {
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%'
                                }
                            })
                        }
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'sign',
                        key: 'sign'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 200,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.showEdit(params)
                                        }
                                    }
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.toChat(params.row)
                                        }
                                    }
                                }, '聊天'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.delete(params.row.id)
                                        }
                                    }
                                }, '删除')
                            ])
                        }
                    }
                ],
                tableData: [
                    {
                        name: 'John Brown',
                        age: 18,
                        sign: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        sign: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        sign: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        sign: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        mounted () {
            this.getInfo()
        },
        computed: {
            ava() {
                return this.$store.state.userInfo.avatar
            },
            myName() {
                return this.$store.state.userInfo.name
            }
        },
        methods: {
            getInfo (page) {
                if (page) {
                    this.$axios.get(url + '/getAll?page=' + page)
                        .then(res => {
                        this.tableData = res.data.data;
                            // this.tableData.forEach(item => {
                            //     item.regDay = tool.formatTime(item.regDay)
                            // })
                        this.total = res.data.count })
                        .catch(err => { console.log(err) })
                } else {
                    this.$axios.get(url + '/getAll?page=1')
                        .then(res => { console.log(res); this.tableData = res.data.data;
                        console.log(res)
                        // this.tableData.forEach(item => {
                            //     item.regDay = tool.formatTime(item.regDay)
                            // })
                        this.total = res.data.count })
                        .catch(err => { console.log(err) })
                }
            },
            getSelect (selection) {
                console.log(selection)
                let arr = []
                for (let i = 0; i < selection.length; i++) {
                    arr.push(selection[i].id)
                }
                this.arr = arr
            },
            showEdit (data) {
                this.editUserModal = true
                this.editUserForm = data.row
                console.log(data.row)
            },
            delete (id) {
                this.$axios.delete(url + '/deleteUser?id=' + id)
                    .then(res => { this.getInfo(this.page) })
                    .catch(err => { throw err })
            },
            jumpPage (page) {
                this.page = page
                this.getInfo(page)
            },
            addUser () {
                this.newUserForm.age = parseInt(this.newUserForm.age)
                this.$axios.post(url + '/newUser', this.newUserForm)
                    .then(res => {
                        console.log(res)
                        this.getInfo(this.page)
                    })
            },
            editUser () {
                const data = {
                    id: this.editUserForm.id,
                    name: this.editUserForm.name,
                    age: this.editUserForm.age,
                    address: this.editUserForm.address,
                    sign: this.editUserForm.sign
                }
                this.$axios.put(url + '/editUser', data)
                    .then(res => { this.getInfo() })
            },
            mulDelete () {
                const data = {
                    arr: this.arr
                }
                this.$axios.post(url + '/mulDeleteUser', data)
                    .then(res => {
                        this.getInfo(this.page)
                    })
            },
            search () {
                const data = {
                    name: this.searchContent
                }
                this.$axios.post(url + '/getUserByLikeFileds', data)
                    .then(res => {
                        console.log(res)
                        this.tableData = res.data.data
                    })
            },
            uploadSuccess (res) {
                this.newUserForm.avatar = 'http://localhost:3001' + res.data
            },
            toChat (row){
                this.$router.push({
                    path: `/chat?id=${row.id}&&name=${row.name}&&friendAva=${row.avatar}`
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello{
        position: absolute;
        min-width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: -webkit-linear-gradient(#4188d7, #52d094); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#4188d7, #52d094); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#4188d7, #52d094); /* Firefox 3.6 - 15 */
        background: linear-gradient(#4188d7, #52d094); /* 标准的语法 */
    }
    .btnRoom{
        width: 1200px;
        height: 100px;
        margin: 100px auto 0 auto;
        background-color: #49a8ba;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .tableRoom{
        width: 1200px;
        min-height: 400px;
        margin: 50px auto 0 auto;
        /*background-color: coral;*/
    }
    .headerBtn{
        margin: auto 0 auto 30px;
    }
    .header{
        position: absolute;
        width: 100%;
        background-color: #4390d0;
        border: 1px solid white;
        color: white;
        font-size: 20px;
    }
    .ava{
        width: 70px;
        border-radius: 50%;
    }
</style>
