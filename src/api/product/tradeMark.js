import request from '@/utils/request'


export const reqTradeMarkList = (page,limit)=>
//发请求,返回结果Promise对象
// /api/user/passport/sendCode/{phone}
request({url: '/admin/product/baseTrademark/${page}/${limit}',method:'get'}); 



