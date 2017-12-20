



import React, {Component} from "react"
import {render} from "react-dom"
import {browserHistory,Router,Route, IndexRedirect,Redirect,hashHistory} from "react-router"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import App from "./app"
import List from "./list"
import Search from "./search"
import My from "./my";
import Home from "./home"
import Detail from "./mhdetail"
import Login from "./login"
import Register from "./register"



export default class Layout extends Component{
  render(){
      return(
        // <Router history={browserHistory}>
   <Router history={hashHistory}> 
        
        <Redirect from="/react/dist" to="/" />

        <Route path="/" component={App}>
            <IndexRedirect to="/home" />
            <Route path="home" component={Home} />
            <Route path="list" component={List} />
            <Route path="search" component={Search}/>
            <Route path="my" component={My}/>
        </Route>
        <Route path="/detail/:id" component={Detail}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        
    </Router>
      )
  }


    
}


// render(
//     (<Router history={browserHistory}>
//         <Route path="/" component={App}>
//             <IndexRedirect to="/home" />
//             <Route path="home" component={Home} />
//             <Route path="list" component={List} />
//             <Route path="search" component={Search}/>
//             <Route path="my" component={My}/>
//         </Route>
        
//     </Router>),
//     document.getElementById('app')
// )