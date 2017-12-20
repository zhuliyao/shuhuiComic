import React,{Component} from "react"
import {Link} from "react-router";
import {connect} from "react-redux"
@connect(
    (state)=>({...state})
)

export default class Foot extends Component{
    static defaultProps = {
     
    }

    render(){
        return (
            <div className="foot">
                {
                    this.props.footList.map((item,i)=>{
                        return(
                            <Link key={i} to={item.path} activeClassName="active">
                                <i className={"iconfont "+item.icon}></i>
                                <span>{item.txt}</span>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}



