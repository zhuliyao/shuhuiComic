// import "./containers"

import Layout from "./containers"
import React from "react"
import {render} from "react-dom"
var app =  document.getElementById('app');
import store from "./store"

import {Provider} from "react-redux"


var hotRender = ()=>{
    render(
       <Provider store={store}>
            <Layout/>
       </Provider>,
        app
    )
}

hotRender();