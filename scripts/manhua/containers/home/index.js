import React,{Component} from "react"
import {connect} from "react-redux";
import axios from "axios"
axios.defaults.baseURL = "http://39.106.5.212:7777"; 
// axios.defaults.baseURL = "http://localhost:7777"; 

import {get_mh} from "../../actions";
import {get_book} from "../../actions"
@connect(
    (state)=>({mh:state.mh})
)

export default class Wechat extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(get_mh("/cartoon",dispatch))


    }
    add=(id)=>{
        const {dispatch} = this.props;
        if(localStorage.username){
                var user=localStorage.getItem("username");
                axios.get("/add_book",{
                    params:{
                        Id:id,
                        username:user

                    }
                }).then(res=>{
                   if(res.data=="1"){
                    layer.open({
                        content: '订阅成功'
                        ,skin: 'msg'
                        ,time: 2 //2秒后自动关闭
                      });
                   }else{
                    layer.open({
                        content: '您已订阅'
                        ,skin: 'msg'
                        ,time: 2 //2秒后自动关闭
                      });
                   }
                })

        }else{
            layer.open({
                content: '请先登录'
                ,btn: '我知道了'
              });
        }
           
    }

    render(){
        const {mh} = this.props;
        return (
            <div className="head01">
                <h1 id="hh">最新漫画</h1>
                <ul>
                   
                   {
                       mh.map((item,idx)=>{
                           return(
                            <li key={idx}>
                            <div className="left">
                                <img src={item.Book.FrontCover}/>
                            </div>
                            <div className="center">
                                <p id="p1">{item.Book.Title}&nbsp;第<span>{item.Sort}</span>话</p>
                                <p id="p2">{item.Title}</p>
                            </div>
                             <div className="right" onClick={()=>this.add(item.Book.Id)}>
                                订阅
                            </div> 
                        </li>
                           )
                       })
                   }
                </ul>
            </div>
        )
    }
} 