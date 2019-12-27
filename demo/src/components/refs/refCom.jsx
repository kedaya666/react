import React , { Component } from 'react'
import Child from './child'
class RefCom extends Component{
    constructor(props){
        super(props)
        this.state = {
            state:true,
            name:"zhangsan"
        }
    }
    componentDidMount(){
    }
    getDataFn(){
        console.log(this.refs.son)
    }
    render(){
        return <div>
                    <p ref="aa">RefCom组件</p> 
                    <button onClick={this.getDataFn.bind(this)}>点我</button>
                    <Child ref="son"/>
               </div>
    }
    componentDidMount(){

    }
}

export default RefCom