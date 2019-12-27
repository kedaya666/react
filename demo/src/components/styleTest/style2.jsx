import React , { Component } from 'react'
import style from '../css/style2.css'
class Style2 extends Component{
    constructor(props){
        super(props)
        // 生命周期相关
        this.state = {
            name:"Ys" 
        }
    }
    render(){
        return <div>
                <p className={style.bb}>测试局部css样式</p>
               </div>
    }
    componentDidMount(){

    }
}

export default Style2