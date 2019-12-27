import React , { Component } from 'react'
import LifeRound from './lifeRound'
import Data from './data/parent'
import IfElse from './ifElseMap'
import Com from './com'
import Parent from './message/parent'
import Style1 from './styleTest/style1'
import Style2 from './styleTest/style2'
import RefCom from './refs/refCom'
class App extends Component{
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
                {/* 生命周期相关 */}
                {/* <LifeRound name={this.state.name}/> */}
                {/* 数据相关 */}
                {/* <Data/> */}
                {/* 样式相关 */}
                <Style1 />
                <Style2 />
                {/* 条件渲染 */}
                {/* <IfElse /> */}
                {/* 受控组件 */}
                {/* <Com /> */}
                {/* 组件通讯 */}
                <Parent />
                {/* ref的使用 */}
                <RefCom/>
               </div>
    }
    componentDidMount(){

    }
}

export default App