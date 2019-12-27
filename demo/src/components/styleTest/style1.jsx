import React , { Component } from 'react'
import StyleClass from '../css/style1.css'
let innerStyle = {
    background:"red"
}
class Style1 extends Component{
    constructor(props){
        super(props)
        // 生命周期相关
        this.state = {
            name:"Ys" 
        }
    }
    render(){
        return <div>
                <p className={StyleClass.active}>测试局部css样式</p>
                <p style={innerStyle}>组件内部的样式</p>
               </div>
    }
    componentDidMount(){

    }
}

export default Style1