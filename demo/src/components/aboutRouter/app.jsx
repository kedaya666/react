import React , { Component } from 'react'
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
                    {this.props.children}
               </div>
    }
}

export default App