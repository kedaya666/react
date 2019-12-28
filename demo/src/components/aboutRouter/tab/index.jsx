import React , { Component } from 'react'
import {
    Link,
    Route
} from 'react-router-dom'
import PropTypes from 'prop-types'

//react的传参必须加上这一步
class Tab extends Component{
    static contextTypes = {
        router: PropTypes.object.isRequired
    }
    constructor(props,contextTypes){
        super(props,contextTypes)
        console.log(contextTypes)
        // 生命周期相关
        this.state = {
            name:"Ys" ,
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