import React,{Component} from "react";
import {connect} from "react-redux";
import { Carousel } from 'antd';
import {get_list1,get_rexue,get_guochan} from "../../actions";
import {browserHistory,Router,Route, IndexRedirect,hashHistory} from "react-router"
@connect(
    (state)=>({list1:state.list1,rexue:state.rexue,guochan:state.guochan})
)




export default class List extends Component{
    todetail=(id)=>{
        // browserHistory.push("/detail/"+id)
        hashHistory.push("/detail/"+id)
    }
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(get_list1("/shuhui",dispatch))

        // const {dispatch} = this.props;
        dispatch(get_rexue("/rexue",dispatch))
        dispatch(get_guochan("/guochan",dispatch))
        
    }
    componentDidMount(){
        var oul=document.querySelectorAll(".search1");
        var ozly=document.querySelectorAll(".zly");
        for(var i=0;i<oul.length;i++){
            oul[i].index=i;
            ozly[i].index=i;
            oul[i].onclick=function(){
                for(var j=0;j<ozly.length;j++){
                    oul[j].className=''
                    ozly[j].className=""
                }
                this.className="search_active";
                ozly[this.index].className="show"
            }
        }
        
    }
    render(){
        const {list1,rexue,guochan} =this.props;
        return (
            <div className="list">
                <h1>漫画分类</h1>
                <div className="banner">
                <Carousel 
                  autoplay
                  dots="false"
                >
                <div><h3 id="q">  </h3></div>
                    <div><h3 id="w"> </h3></div>
                    <div><h3 id="e"></h3> </div>
                    {/* <div><h3 id="q">  <img  src={require("../../../../assets/images/slide1.png")}/></h3></div>
                    <div><h3 id="w">  <img  src={require("../../../../assets/images/slide2.png")}/></h3></div>
                    <div><h3 id="e"><img  src={require("../../../../assets/images/slide3.png")}/></h3> </div> */}
                </Carousel>

                </div>
             <ul className="search">
                <li className="search1 search_active">鼠绘漫画</li>
                <li className="search1">热血漫画</li>
                <li className="search1">国产漫画</li>
             </ul>
            <div className="content">
                <ul className="zly show">
                  
                    {
                        list1.map((item,idx)=>{
                            return(
                                <li key={item.Id} onClick={()=>this.todetail(item.Id)}>
                                <div className="left"> <img key="1" className="img" src={item.FrontCover}/></div>
                                <div className="right">
                                    <p id="p1">《{item.Title}》{item.Author}</p>
                                    <p id="p2">第<span>{item.LastChapter.Sort}</span>话</p>
                                    <p id="p3">{item.Explain}</p>
                                </div>
                            </li>
                            )
                        })
                    }
                   
                
                
                </ul>


                <ul className="zly">
                {
                        rexue.map((item,idx)=>{
                            return(
                                <li key={item.Id} onClick={()=>this.todetail(item.Id)}>
                                <div className="left"> <img key="1" className="img" src={item.FrontCover}/></div>
                                <div className="right">
                                    <p id="p1">《{item.Title}》{item.Author}</p>
                                    <p id="p2">第<span>{item.LastChapter.Sort}</span>话</p>
                                    <p id="p3">{item.Explain}</p>
                                </div>
                            </li>
                            )
                        })
                    }
                    
                    </ul>
                <ul className="zly">{
                        guochan.map((item,idx)=>{
                            return(
                                <li key={item.Id} onClick={()=>this.todetail(item.Id)}>
                                <div className="left"> <img key="1" className="img" src={item.FrontCover}/></div>
                                <div className="right">
                                    <p id="p1">《{item.Title}》{item.Author}</p>
                                    <p id="p2">第<span>{item.LastChapter.Sort}</span>话</p>
                                    <p id="p3">{item.Explain}</p>
                                </div>
                            </li>
                            )
                        })
                    }</ul>
                


            </div>



         </div>
        )
    }
    componentDidUpdate(){
      


    }
} 