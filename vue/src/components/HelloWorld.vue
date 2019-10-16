<template>
</template>

<script>

  const url = 'http://localhost:3001/user'
  export default {
    name: 'HelloWorld',
    mounted () {
      this.$router.push({
        path: '/Login'
      })
    },
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
    background-color: #52d094;
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
</style>
