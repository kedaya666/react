import React , { Component } from 'react'
import Observer from "../../tool/observer"
class Child extends Component{
    constructor(props){
        super(props)
        this.state = {
            state:true,
            name:"zhangsan"
        }
        // this.props.cb(this.state.name)
    }
    componentDidMount(){
        Observer.$emit("up",this.state.name)
    }
    render(){
        return <div>
                    子组件1
               </div>
    }
}

export default Child