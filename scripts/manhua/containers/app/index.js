import React,{Component} from "react"

import Foot from "../../components/foot"

export default class Wechat extends Component{
    
        render(){
            return (
                <div>
                    {/* <h1>home</h1> */}
                    {this.props.children}
                <Foot/>
                    
                </div>
            )
        }
    } 

