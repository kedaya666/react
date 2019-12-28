import React , { Component } from 'react'
import {
    Link,
    Route,
    NavLink
} from 'react-router-dom'
import PropTypes from 'prop-types'

//react的传参必须加上这一步
class navLinks extends Component{
    constructor(props){
        super(props)
        // 生命周期相关
        this.state = {
            name:"Ys" ,
        }
    }
    fn(e){
        console.log(e)
    }
    render(){
        return <div>
                    <h2>navLink组件</h2>
                    <NavLink to="/navlick/child1" isActive={this.fn.bind(this)} activeStyle={{color:"red"}}>点击child</NavLink>
                    <NavLink to="/navlick/child2" activeStyle={{color:"red"}}>点击child</NavLink>
               </div>
    }
}

export default NavLink