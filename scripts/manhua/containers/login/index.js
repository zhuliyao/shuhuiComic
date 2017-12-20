import React,{Component} from "react";
axios.defaults.baseURL = "http://39.106.5.212:7777"; 
// axios.defaults.baseURL = "http://localhost:7777"; 

import {Link,browserHistory,hashHistory} from "react-router";
import axios from "axios"
import {connect} from "react-redux";


export default class Login extends Component{
    goback=()=>{
        this.props.router.goBack();
    }
    componentDidMount(){
        const {dispatch} = this.props;

    }
    login=()=>{
        var that=this;
        axios.get("/login",{
            params:{
                username:that.refs.username.value,
                password:that.refs.password.value
            }
           
        }).then(res=>{
            var that=this;
            if(res.data.length>0){
                localStorage.username=that.refs.username.value,
                layer.open({
                    content: '登陆成功'
                    ,skin: 'msg',
                    time:2,
                    success: function(){
                        layer.close();
                        that.props.router.push("/my");
                        // setTimeout(function() {
                        //     that.props.router.push("/my");
                        // }, 2);
                       
                      }  
                  });

                    
                
            }else{
                // alert("失败")
               
                // 
                layer.open({
                    title: [
                      '登陆失败',
                      'background-color: #FF4351; color:#fff;'
                    ]
                    ,content: '用户名或密码错误。'
                  });
            }
        })
    }
    render(){
        return (
            <div className="login">
                <h1>登录
                <div className="jt" onClick={this.goback}>
                                <img  src={require("../../../../assets/images/jt.png")}/>
                 </div>
                </h1>
                <div className="content">
                        <div className="zz">
                            <i className="iconfont icon-wo" id="center"></i>
                        </div>
                        <input type="text" name="username"  ref="username" className="user" placeholder="请输入手机号" />
                        <div className="zz1">
                            <i className="iconfont icon-mima1"></i>
                        </div>
                        <input type="password" name="password"  ref="password" className="pass" placeholder="请输入密码" />
                    <div className="zl">
                     <button className="tijiao"  onClick={this.login}>登录</button>
                     <div className="zhuce">
                         <Link to="/register">  注册</Link>
                         
                         </div>
                    </div>


                </div>
            </div>
        )
    }
} 