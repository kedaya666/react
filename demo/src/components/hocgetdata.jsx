import React , { Component } from 'react'
import GetDataHoc from '../components/高阶组件/index'


class Index extends Component{
    constructor(props){
        super(props)
        // 生命周期相关
        this.state = {
            name:"Ys" 
        }
    }
    render(){
        return <div>
                    高阶组件
               </div>
    }
}
let Com = GetDataHoc(Index)
export default Com