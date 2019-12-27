import React , { Component } from 'react'
class TabChild extends Component{
    constructor(props){
        super(props)
        // 生命周期相关
        this.state = {
            name:"Ys" 
        }
    }
    render(){
        return <div>
                    Tab页2
               </div>
    }
}

export default TabChild