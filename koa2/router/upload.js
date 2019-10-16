const formidable = require('koa-formidable')
const fs = require('fs')
const path = require('path')

let mkdirs = (dirname, callback)=> {
    fs.exists(dirname, function(exists) {
        if (exists) {
            callback();
        } else {
            mkdirs(path.dirname(dirname), function() {
                fs.mkdir(dirname, callback);
            });
        }
    });
};

module.exports = upload = async (ctx, next) => {
    let form = formidable.parse(ctx.request);
    function formImage() {
        return new Promise((resolve, reject) => {
            form((opt, {fields, files})=> {
                let url = fields.url;
                let articleId = fields.articleId;
                let filename = files.file.name;
                console.log(files.file.path);
                let uploadDir = 'upload/ava/';
                let avatarName = Date.now() + '_' + filename;
                mkdirs('upload/ava/', function() {
                    fs.renameSync(files.file.path, uploadDir + avatarName);
                    resolve('/' + uploadDir + avatarName)
                })
            })
        })
    }
    let url = await formImage();
    console.log(url)
    ctx.body = {flag: '1',msg:'',data: url}
}

