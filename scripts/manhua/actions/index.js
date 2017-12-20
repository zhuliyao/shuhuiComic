import axios from "axios";
// axios.defaults.baseURL = "http://localhost:7777"; 
import store from "../store";
axios.defaults.baseURL = "http://39.106.5.212:7777"; 


export function get_mh(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"get_mh_success",json})
        })
}
export function get_list1(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"get_list1_success",json})
        })
}
export function get_rexue(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"get_rexue_success",json})
        })
}

export function get_guochan(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
            return dispatch({type:"get_guochan_success",json})
        })
}

export function get_detail(url,id){
    // console.log(id);
    return axios.get(url,{
        params:{
            id:id
        }
    }).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"get_detail_success",json})
    })
}

export function loginable(logindisabled,color)
{
    return{
        type:"logindisabled",
        logindisabled,
        color,

    }
}
export function local(zly,flag){
    return{
        type:"local_success",
        zly,
        flag
    }
}

export function lyout(flag){
    return{
        type:"lyout_success",
        flag
    }
}

export function add(user,id){
    return{
        type:"add_success",
        user,
        id
    }
}


//订阅
export function get_book(url,user){
    // console.log(user);
    return axios.get(url,{
        params:{
            username:user
        }
    }).then(res=>{
        return res.data
    }).then(json=>{
        return store.dispatch({type:"get_book_success",json})
    })
}