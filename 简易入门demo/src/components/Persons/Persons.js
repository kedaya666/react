import React,{Component} from 'react'
import Person from './Person/Person'

// 无状态组件
/* const person = (props) => {
     return props.persons.map((person,index) => {
        return <Person 
        myClick={()=>props.clicked(index)}
        name={person.name}
        age={person.age } 
        changed={(event)=>props.changed(event,person.id)}/>
     })
         
} */
// 有状态组件
class Persons extends Component{
   constructor(props){
      super(props);
      console.log("Persons-constructor")
   }
   componentWillMount(){
      console.log("Persons-componentWillMount")
    }
    
    componentDidMount(){
      console.log("Persons-componentDidMount")
    }

   //  更新组件生命周期函数
   componentWillReceiveProps(nextProps){
      console.log("组件数据更新====",nextProps)
   }
   shouldComponentUpdate(nextProps,nextState){
      console.log("组件数据更新should====",nextProps,nextState)
      // return false//不会执行更新了
      //return true //执行更新
      return nextProps.persons !== this.props.persons
   }
   // 将要进行渲染了
   componentWillUpdate(nextProps,nextState){
      console.log("组件将要渲染了",nextProps,nextState)
   }
   // 渲染完了
   componentDidUpdate(preProps,preStates){
      console.log("我已经渲染完了",preProps,preStates)
   }
    
   render(){
      console.log("Persons- render")
      return this.props.persons.map((person,index) => {
         return <Person 
         myClick={()=>this.props.clicked(index)}
         name={person.name}
         age={person.age } 
         key={person.id} 
         changed={(event)=>this.props.changed(event,person.id)}/>
      })
   }

}
export default Persons