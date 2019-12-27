import React , { Component } from 'react'
class List extends Component{
    constructor(props){
        super(props)
        // 生命周期相关
        this.state = {
            name:"Ys" 
        }
    }
    render(){
        return <div>
                    列表页
               </div>
    }
}

export default List