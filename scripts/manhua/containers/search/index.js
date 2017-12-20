import React,{Component} from "react"

export default class Wechat extends Component{

    render(){
        return (
            <div className="search">
                <h1>搜索漫画</h1>
                <div className="sr">
                    <div className="center">
                        <i className="iconfont icon-sousuo"></i>
                       <input type="text" id="sd" placeholder="搜索漫画"/>
                      
                    </div>
                    <div className="left">搜索</div>

                </div>
                <div className="bottom">
                    热门搜索
                </div>
                <ul>
                    <li>一拳超人</li>
                    <li>钻石王牌</li>
                    <li>飚速宅男</li>
                    <li>格雷少年</li>

                </ul>
            </div>
        )
    }
} 