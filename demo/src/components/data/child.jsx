import React , { Component } from 'react'
import PropTypes from 'prop-types'
class Child extends Component{
    constructor(props){
        super(props)
        // 生命周期相关
        this.state = {
            name:"Ys" 
        }
        setInterval(()=>{
            this.setState({
                name:"myj"
            })
        })
    }
    render(){
        return <div>
                {this.props.name}
               </div>
    }
    componentDidMount(){

    }
}
Child.PropType={
    name:PropTypes.string.isRequired
}

export default Child