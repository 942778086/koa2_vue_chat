# 这是什么？
这是一个基于koa2，vue-cli2和mysql的简单增删查改与聊天功能的app。koa2忽视数据库字段快速开发接口。适用于前端有基础但是后端不怎么熟练的入门者，或者需要快速开发接口的业务场景
# 里面有什么
## koa2  
  -集成CURD  
  -token鉴权  
  -静态资源及上传文件模块  
  -socket
## vue  
  -iview  
  -axios  
  -vue-socket.io
  -vuex
# koa2
## 集成接口  
  -分页查询  
  -主键查询  
  -条件查询  
  -模糊查询  
  -新增记录  
  -修改记录  
  -根据主键删除记录  
  -根据id数组批量删除记录  
  -socket.io单播一对一聊天
## 原理  
  -通过前端传输的参数，生成sql语句，数据库字段由前端提供，后端只需要设计接口名称和传入数据库表名。
## 安装  
  -npm i  
## 运行  
  -node index.js
# vue
前端在这个demo中并不是展示的重点，但也是一个小巧的app，如果对koa2中的api参数不清楚，请参照vue  
## 安装  
npm i  
## 运行  
  -npm run dev
  # mysql
 已上传数据库文件 
