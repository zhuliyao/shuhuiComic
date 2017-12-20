import React,{Component} from "react";
import {browserHistory,Router,Route, IndexRedirect} from "react-router"
import {loginable} from "../../actions";
import {connect} from "react-redux";
import axios from "axios"
axios.defaults.baseURL = "http://39.106.5.212:7777";
//  axios.defaults.baseURL = "http://localhost:7777"; 
 


@connect(
    (state)=>({logindisabled:state.logindisabled,logincolor:state.logincolor}) 
)

export default class Register extends Component{
    componentDidMount(){
    }
    goback=()=>{
        this.props.router.goBack();
    }
    change=()=>{
        var user = false,pwd = false,pwd1=false;
        const {dispatch} = this.props;
        var userval=this.refs.username.value;
        var pwdval=this.refs.password.value;
        
        
        
        if(userval==""){
            this.refs.username.style.borderBottom=" 3px solid red"
        }else{
            if(/^1[3|4|5|8][0-9]\d{4,8}$/.test(userval)==false){
                this.refs.username.style.borderBottom=" 3px solid red"                               
            }else{
                this.refs.username.style.borderBottom=" 3px solid green"              
                user=true;    
            }
            
        }
        ///
        if(pwdval==""){
            this.refs.password.style.borderBottom=" 3px solid red"                               
            
        }else{
            if(/^[a-zA-Z0-9]{6,10}$/.test(pwdval) == false){
                this.refs.password.style.borderBottom=" 3px solid red"                               
            }else{
                this.refs.password.style.borderBottom=" 3px solid green"              
                pwd=true;
                
            }
        }
            
        var pwdval1=this.refs.password1.value;
    /////
    if(pwdval1==""){
        this.refs.password1.style.borderBottom=" 3px solid red"                               
    }else{
        if(pwdval!=pwdval1){
        this.refs.password1.style.borderBottom=" 3px solid red"                               
        }else{
        this.refs.password1.style.borderBottom=" 3px solid green"                               
        
            pwd1=true;
        }
        
    }

        if(user&&pwd&&pwd1){
            dispatch(loginable(false,"orange"));
        }else{
            dispatch(loginable(true,"#ccc"));           
        }
    }

  
    Reg=()=>{
        var that = this;

      axios.post("/register",{
        username:this.refs.username.value,
        password:this.refs.password.value

      }).then(res=>{
          if(res.data=="1"){
               // alert("登陆成功")
               layer.open({
                content: '注册成功'
                ,skin: 'msg',
                time:2,
                success: function(){
                    layer.close();
                    that.props.router.push("/login");
                    // setTimeout(function() {
                    //     that.props.router.push("/my");
                    // }, 2);
                   
                  }  
              });
          }else{
            layer.open({
                content: '用户名已存在，请重新注册'
                ,btn: '我知道了'
              });
          }
      })
        
    }
    componentDidMount(){
    }        
    render(){
        return (
            <div className="register">
                <h1>登录
                <div className="jt" onClick={this.goback}>
                                <img  src={require("../../../../assets/images/jt.png")}/>
                 </div>
                </h1>
                <div className="content">
                        <div className="zz">
                            <i className="iconfont icon-mmobilephone"></i>
                        </div>
                        <input type="text" name="username" className="user" ref="username" placeholder="请输入手机号"  onChange={this.change}/>
                        <div className="zz1">
                            <i className="iconfont icon-mima1"></i>
                        </div>
                        <input type="password" name="password" className="pass" placeholder="请输入密码" ref="password"  onChange={this.change}/>

                        <div className="zz1 zz2">
                            <i className="iconfont icon-mima1"></i>
                        </div>
                        <input type="password" name="password1" className="pass1" placeholder="请确认密码" ref="password1" onChange={this.change}/>
                    <div className="zl">
                     <button className="zhuce"  ref="btn" disabled={this.props.logindisabled} style={{background:this.props.logincolor}}  onClick={this.Reg}>注册</button>
                    </div>


                </div>
            </div>
        )
    }
} 