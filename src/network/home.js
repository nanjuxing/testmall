import {request,request_1} from "./request"

export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}

export function getHomeGoods(type,page){
    return request_1({
        url:'home/data',
        params:{
            type,
            page
        }
    })
}