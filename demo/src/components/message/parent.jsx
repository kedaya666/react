import React , { Component } from 'react'
import Child1 from './child1'
import Child2 from './child2'
import Observer from '../../tool/observer'

class Parent extends Component{
    constructor(props){
        super(props)
        this.state = {
            state:true,
            lists:[1,2,3,4,5],
            name:"myj"
        }
        Observer.$on("up",(data) => {
            console.log(data)
            this.setState({
                name:data
            })
        })

    }
   /*  getSonData(item){
        this.setState({
            name:item
        })
    } */
    render(){
        return <div>
                    {this.state.name}
                    <Child1/>
                    {/* <Child1 cb={this.getSonData.bind(this)}/>  */}
                    {/* <Child2 name={this.state.name}/>  */}
               </div>
    }
    componentDidMount(){

    }
}

export default Parent