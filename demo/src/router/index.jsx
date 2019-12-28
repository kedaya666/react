import React , { Component } from 'react'
import {
    // HashRouter as Router,
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'
import Index from '../components/aboutRouter/index'
import List from '../components/aboutRouter/list'
import App from '../components/aboutRouter/app'
import Tab from "../components/aboutRouter/tab/index"
import Tab1 from "../components/aboutRouter/tab/tab1"
import Tab2 from "../components/aboutRouter/tab/tab2"
import Parent from '../components/data/parent'
import NavLicks from '../components/navLink/navLink'
import HocGetData from '../components/hocgetdata'

let childRouter=()=>{
    return <Tab>
        <Switch>
            <Route path="/tab/tab1" component={Tab1}/>
            <Route path="/tab/tab2" component={Tab2}/>
        </Switch>
    </Tab>
}
const NavLinkRouter=()=>{
    return (
        <NavLicks>
            <Switch>
                <Route path={'/navlick/child1'} render={()=><h5>子组件的child1</h5>}></Route>
                <Route path={'/navlick/child2'} render={()=><h5>子组件的child2</h5>}></Route>
            </Switch>
        </NavLicks>
    )
}
const InitLink=(matchs)=>{
    console.log(matchs)
    return <li>
        <Link to="/path/child1"></Link>
    </li>
}
let routerBase=()=>{
    // basename添加基路由
    return (<Router basename="/app">
        <App>
        <Switch>
            {/* 
                解决路由匹配问题的方法 
                1、越详细的路由越要往前放，权限越大的路由越往后放 
                2、给权限大的路由加一个exact属性 
            */}

            {/* <Route path="/list" component={List}/>
            <Route path="/" component={Index}/> */}

            <Route exact path="/" component={Index}/>
            <Route path="/list" component={List}/>
            <Route path="/tab" component={childRouter}/>
            <Route path="/navlick" render={NavLinkRouter}/>
            <Route path="/hocgetdata" component={HocGetData}/>
            {/* <InitLink to="/parent/child1"></InitLink> */}
        </Switch>
        </App>
    </Router>)
}
export default routerBase