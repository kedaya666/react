import React , { Component } from 'react'
import {
    Link
} from 'react-router-dom'

class App extends Component{
    constructor(props){
        super(props)
        // 生命周期相关
        this.state = {
            name:"Ys" 
        }
    }
    render(){
        return <div className="app-node">
                    <Link to="/">首页</Link>
                    <Link to="/list">列表页</Link>
                    <Link to={{
                        pathname:'/tab',
                        search:'?sort-name',
                        state:{fromData:true}
                    }}>tab</Link>
                    <Link to="/navlick">navlick</Link>
                    <Link to="/hocgetdata">hocgetdata</Link>
                    {this.props.children}
               </div>
    }
}

export default App