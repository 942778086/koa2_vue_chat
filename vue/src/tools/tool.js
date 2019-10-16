const tool = {
    /**
     * 检查字符串是否为时间
     * @type {checkTime}
     */
    checkTime: (data) => {
        if(isNaN(data)&&!isNaN(Date.parse(data))){
            return 'true'
        }
    },

    /**
     * 格式化时间（类型1）
     * ex: 2019-10-9
     * @type {function(*): number}
     */
    formatTime: (date) => {
        date = Date.parse(date)
        const year = new Date(date).getFullYear()
        const month = new Date(date).getMonth() + 1
        const day = new Date(date).getDate()
        const hour = new Date(date).getHours()
        const min = new Date(date).getMinutes()
        const sec = new Date(date).getSeconds()
        return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec
    }
}

module.exports = tool
