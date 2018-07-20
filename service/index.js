const Koa = require('koa')
const app = new Koa()
const { connect, initSchemas } = require('./database/init.js');
const mongoose = require('mongoose');
//引入koa-router
const Router=require('koa-router');
const bodyParser=require('koa-bodyparser');
const cors=require('koa2-cors');


app.use(bodyParser());
app.use(cors());
//引用我们的user.js模块
let user=require('./appApi/user.js');
//装载所有子路由
let router=new Router();
router.use('/user',user.routes());
//装载所有子路由结束

//加载路由中间件
app.use(router.routes());
app.use(router.allowedMethods());
//加载路由中间件结束

; (async () => {
    await connect();
    initSchemas();
})()

app.use(async (ctx) => {
    ctx.body = '<h1>hello Koa2</h1>'
})

app.listen(3000, () => {
    console.log('[Server] starting at port 3000');
})