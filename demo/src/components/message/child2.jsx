import React , { Component } from 'react'
class Child2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:null
        }
    }
    render(){
        return <div>
                    子组件2
                    <h4>{this.props.name}</h4>
               </div>
    }
}

export default Child2