import React , { Component } from 'react'
import Child from './child'
class Parent extends Component{
    constructor(props){
        super(props)
        // 生命周期相关
        this.state = {
            name:"Ys" 
        }
        /* setInterval(()=>{
            this.setState({
                name:"myj"
            })
        }) */
    }
    render(){
        return <div>
                    <Child name={this.state.name}/>
               </div>
    }
    componentDidMount(){

    }
}

export default Parent