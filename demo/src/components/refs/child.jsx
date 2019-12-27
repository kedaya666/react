import React , { Component } from 'react'
class RefChild extends Component{
    constructor(props){
        super(props)
        this.state = {
            state:true,
            name:"RefChild"
        }
    }
    componentDidMount(){
    }
    getDataFn(){
        console.log("RefChild")
    }
    render(){
        return <div>
                    <p>ref的子组件</p>
               </div>
    }
    componentDidMount(){

    }
}

export default RefChild