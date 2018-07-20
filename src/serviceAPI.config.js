const BASEURL = "https://www.easy-mock.com/mock/5aea7d4789d8cd17c09d6ca9/myself/";
const LOCALURL='http://localhost:3000/'
const URL = {
    getHomeInfo: BASEURL + 'shop',
    getGoodsInfo: BASEURL + 'getGoodsInfo',
    registerUser:LOCALURL+'user/register',//用户注册接口
    loginUser:LOCALURL+'user/login'//用户登录接口
}
module.exports = URL;