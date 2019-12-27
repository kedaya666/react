import React , { Component } from 'react'
class IfElseMap extends Component{
    constructor(props){
        super(props)
        this.state = {
            state:true,
            lists:[1,2,3,4,5]
        }
    }
    changeList(){
        this.setState({
            lists:[6,7,8,9,10]
        })
    }
    render(){
        let el1 = <div>this is true</div>
        let el2 = <div>this is false</div>
        let com = null
        if(this.state.state){
            com = el1
        }else{
            com=el2
        }
        let el = this.state.lists.map((list,index)=>{
                return <li key={index}>{list}</li>
            })
        return <div>
                    {com}
                    {!this.state.state?el1:el2}
                    {/* 逻辑与 */}
                    {this.state.state&&el1}
                    {/* 列表 */}
                    <ul>
                        {el}
                    </ul>
                    <button onClick={()=>this.changeList()}>点我</button>
               </div>
    }
    componentDidMount(){

    }
}

export default IfElseMap