import React,{Component} from "react"
import {browserHistory,Router,Route, IndexRedirect,hashHistory} from "react-router";
import {connect} from "react-redux";
import {local} from "../../actions"
import {get_book} from "../../actions";
import axios from "axios"
axios.defaults.baseURL = "http://39.106.5.212:7777"; 
// axios.defaults.baseURL = "http://localhost:7777"; 


@connect(
    (state)=>({user:state.user,flag:state.flag,book:state.book})
)
export default class Wechat extends Component{
    componentWillMount(){
        const {dispatch} = this.props;
        if(localStorage.username){
            var zly=localStorage.getItem("username")
            dispatch(local(zly,"block"));
            dispatch(get_book("/get_book",zly))

        }else{
            var zly="点击头像登录"
            dispatch(local(zly,"none"))
        }
        


    }
    tologin=()=>{
        // browserHistory.push("/login")
        this.props.router.push("/login")
        
    }
    lyout=()=>{
        layer.open({
            content: '您确定要退出登录么？'
            ,btn: ['确定', '再想想']
            ,yes: function(index){
                localStorage.removeItem("username");
              location.reload();
            // this.props.router.push("/my");
            
              layer.close(index);
            }
          });
        
        
       
        // this.props.push("./mine")
        // location.reload();
    }
    del=(id)=>{
        const {dispatch} = this.props;
        
        var zly=localStorage.getItem("username")
        axios.get("/del",{
            params:{
                Id:id,
                username:zly
            }
        }).then(res=>{
            console.log("删除")
            // location.reload();
            dispatch(get_book("/get_book",zly))
        })
    }
    render(){
        const {user,flag,book}=this.props;
        if(book.length>0){
            var list=book.map((item,idx)=>{
                return(
                         <li key={idx}>
                    <img key="1" className="img" src={item.FrontCover}/>
                    <p id="p1">{item.Title}</p>
                    <p id="p2" onClick={()=>this.del(item.BookId)}>取消订阅</p>
                      </li>
                
                )
            })
        }
        return (
            <div className="mine">
                <h1>我的订阅</h1>
                <div className="head">
                    <i className="iconfont icon-wo" id="center" onClick={this.tologin}></i>
                    <div className="txt">{user}</div>
                    <div className="out" style={{display:flag}} onClick={this.lyout}>注销</div>
                    <ul className="bot">
                            <li>
                                <p id="p1">动态</p>
                                <p  id="p2">0</p>
                                
                            </li>
                            <li>
                                <p  id="p1">关注</p>
                                <p  id="p2">0</p>
                                

                            </li>
                            <li>
                                 <p  id="p1">粉丝</p>
                                <p  id="p2">0</p>
                                    
                            </li>

                    </ul>
                </div>
                <div className="ll"><div className="qd">我的收藏</div></div>
                
                <ul className="list">
                        {/* <li>
                                 <img key="1" className="img" src={require("../../../../assets/images/slide1.png")}/>
                                 <p id="p1">鼠绘</p>
                                 <p id="p2">取消订阅</p>
                        </li> */}
                        
                        {list}
                       

                </ul>
            </div>
        )
    }
} 