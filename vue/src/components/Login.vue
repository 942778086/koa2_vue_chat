<template>
    <div class="login">
        <div class="contain">
            <Input class="itemInput" v-model="username" />
            <Input class="itemInput" v-model="pwd" type="password" />
            <div><Button type="primary" ghost @click="login" style="margin-top: 5%">Login</Button></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data () {
            return {
                username: '吴建星',
                pwd: 'ThinkYourself'
            }
        },
        methods: {
            login () {
                const data = {
                    name: this.username,
                    pwd: this.pwd
                }
                this.$axios.post('http://localhost:3001/login', data)
                    .then(res => {
                        console.log(res)
                        if (res.data.msg === 'success') {
                            localStorage.setItem('token', res.data.token)
                            this.$store.commit('getUserInfo', {name: data.name})
                            this.$router.push({
                                path: '/Main'
                            })
                        } else {
                            alert('你被嘲讽了，按f12，console就能看')
                        }
                    })
                    .catch(err => { throw err })
            }
        }
    }
</script>

<style scoped>
.login{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: -webkit-linear-gradient(#4188d7, #52d094); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#4188d7, #52d094); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#4188d7, #52d094); /* Firefox 3.6 - 15 */
    background: linear-gradient(#4188d7, #52d094); /* 标准的语法 */
}
    .contain{
        width: 30%;
        height: 30%;
        margin: 15% auto 0 auto;
        border-radius: 15px;
        border: 3px solid white;
        background: -webkit-linear-gradient(#4188d7, #2c7363); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#4188d7, #2c7363); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#4188d7, #2c7363); /* Firefox 3.6 - 15 */
        background: linear-gradient(#4188d7, #2c7363); /* 标准的语法 */
    }
    .itemInput{
        width: 50%;
        margin: 5% auto 0 auto;
    }
</style>
