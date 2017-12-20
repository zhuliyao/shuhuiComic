import React,{Component} from "react";
import {connect} from "react-redux";
import {get_detail} from "../../actions"
axios.defaults.baseURL = "http://39.106.5.212:7777"; 

// axios.defaults.baseURL = "http://localhost:7777"; 
import axios from "axios"

import {browserHistory,Router,Route, IndexRedirect} from "react-router"
@connect(
    (state)=>({ldetail:state.ldetail})
)
export default class Wechat extends Component{
    goback=()=>{
        this.props.router.goBack();
    }
    componentWillMount(){
        const {dispatch,params}=this.props;
        dispatch(get_detail("/detail",params.id))
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
        const {ldetail}=this.props;
        return (
            
            <div className="l_detail">
                {
                    ldetail.map((item,idx)=>{
                        return(
                            <div>
                            <h1>{item.Title}
                            
                            <div className="jt" onClick={this.goback}>
                                <img  src={require("../../../../assets/images/jt.png")}/>
                            </div>
                            </h1>
                            <div className="content">
                                <div className="left"> 
                                    <img src={item.FrontCover}/>

                                </div>
                                <div className="right">
                                    <p id="p1">{item.Title}</p>
                                    <p id="p3">作者：{item.Author}</p>
                                    <p id="p2">标签：热血</p>
                                    <p id="p2">状态: 连载中</p>
                                    
                                    
            
                                </div>
                            </div>
                            <div className="con">
                                    <div className="go">
                                        <i className="iconfont icon-yanjing"></i>
                                        <span>继续去看{item.LastChapter.ChapterNo}</span>
                                    </div>
                                    <div className="ding">
                                    <i className="iconfont icon-iconjia"></i>
                                        <span onClick={()=>this.add(item.LastChapter.BookId)}>订阅</span>
                                    </div>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
} 