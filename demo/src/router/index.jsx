import React , { Component } from 'react'
import {
    // HashRouter as Router,
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Index from '../components/aboutRouter/index'
import List from '../components/aboutRouter/list'
import App from '../components/aboutRouter/app'
import Tab from "../components/aboutRouter/tab/index"
import Tab1 from "../components/aboutRouter/tab/tab1"
import Tab2 from "../components/aboutRouter/tab/tab2"

let childRouter=()=>{
    return <Tab>
        <Switch>
            <Route path="/tab/tab1" component={Tab1}/>
            <Route path="/tab/tab2" component={Tab2}/>
        </Switch>
    </Tab>
}
let routerBase=()=>{
    return (<Router>
        <App>
        <Switch>
            {/* 
                解决路由比配问题的方法 
                1、越详细的路由越要往前放，权限越大的路由越往后放 
                2、给权限大的路由加一个exact属性 
            */}

            {/* <Route path="/list" component={List}/>
            <Route path="/" component={Index}/> */}

            <Route exact path="/" component={Index}/>
            <Route path="/list" component={List}/>
            <Route path="/tab" component={childRouter}/>
        </Switch>
        </App>
    </Router>)
}
export default routerBase