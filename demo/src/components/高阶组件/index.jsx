import React , { Component } from 'react'

let GetDataHoc=()=>{
    return class App extends Component{
        constructor(props){
            super(props)
            // 生命周期相关
            this.state = {
                name:"Ys" 
            }
        }
        render(){
            return <div>
                        首页
                   </div>
        }
    }

}

export default GetDataHoc