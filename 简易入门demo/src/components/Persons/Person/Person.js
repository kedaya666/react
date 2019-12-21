import React,{Component} from 'react'
import './Person.css'
/* const person = (props) => {
     return (
         <div className="Person">
            <p onClick={props.myClick}>My name is {props.name},I am  {props.age} years old</p>
            <p >{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name}></input>
         </div>
         )
         
} */
class person extends Component{
   constructor(props){
      super(props);
      console.log("Person-constructor")
   }
   componentWillMount(){
      console.log("Person-componentWillMount")
    }
    
    componentDidMount(){
      console.log("Person-componentDidMount")
    }
   render(){
      console.log("Person-render")
      return (
         <div className="Person">
            <p onClick={this.props.myClick}>My name is {this.props.name},I am  {this.props.age} years old</p>
            <p >{this.props.children}</p>
            <input type="text" onChange={this.props.changed} defaultValue={this.props.name}></input>
         </div>
         )
   }
}
export default person