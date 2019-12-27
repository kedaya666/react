import React , { Component } from 'react'
import {
    Link
} from 'react-router-dom'

class Tab extends Component{
    constructor(props){
        super(props)
        // 生命周期相关
        this.state = {
            name:"Ys" 
        }
    }
    render(){
        return <div>
                    <h3>Tab页-主页</h3>
                    <Link to="/tab/tab1">tab1</Link>
                    <Link to="/tab/tab2">tab2</Link>
                    {this.props.children}
               </div>
    }
}

export default Tab