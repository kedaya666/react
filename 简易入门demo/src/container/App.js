import React,{Component} from 'react';
import './App.css';
import Person from '../components/Persons/Persons'
import MyHeader from '../components/Header/header'

// 有状态组件
/* 
* 有状态组件是一个类， 可以使用state。只有继承于Component的组件可以使用state，进行数据的存储于管理，有生命周期函数
* 无状态组件是一个函数，不可以使用state
*/
class App extends Component{
  constructor(props){
    super(props);
    console.log("constructor")
    // state用于改变组件内状态的值
    // props 用于组件通信传值
    this.state = {
      persons: [
        {id:1,name:"Tom",age:18},
        {id:2,name:"Marry",age:8},
        {id:3 ,name:"Hey",age:20},
      ],
      animal:"cat",
      showPerson:false
    }
  }

  componentWillMount(){
    console.log("componentWillMount")
  }
  
  componentDidMount(){
    console.log("componentDidMount")
  }
  
  changeAge = (name)=>{
    this.setState({
      persons: [
        {name:name,age:19},
        {name:"Marry",age:9},
        {name:"Hey",age:21},
      ]
    })
  }
  changeName = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex]=person
    this.setState({
      persons: persons
      // persons: [
      //   {name:event.target.value,age:19},
      //   {name:"Marry",age:9},
      //   {name:"Hey",age:21},
      // ]
    })
  }
  changeText = () => {
    const doseShow = this.state.showPerson
    this.setState({
      showPerson : !doseShow
    })
  }
  deletePersonFn = (index) => {
    const persons = [...this.state.persons]
    persons.splice(index,1)
    this.setState({
      persons:persons
    })

  }

  render(){
    console.log("render")
    // const style = {
    //   backgroundColor: 'green',
    //   color:'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '9px',
    //   cursor: 'pointer'
    // }
    let persons = null;
    if(this.state.showPerson){
      persons = <Person 
                  persons={this.state.persons}
                  clicked={this.deletePersonFn}
                  changed={this.changeName}/>
      // persons = (
      //   <div>
      //     {
      //       this.state.persons.map((person,index) => {
      //         return <Person 
      //                 changed={(event) => this.changeName(event,person.id)}
      //                 myClick={()=>this.deletePersonFn(index)} 
      //                 key={person.id} 
      //                 name={person.name} 
      //                 age={person.age} />
      //       })
      //     }
      //       {/* <Person 
      //         changed={this.changeName}
      //         name={this.state.persons[0].name} 
      //         age={this.state.persons[0].age} />
      //         <Person 
      //         myClick={this.changeAge.bind(this,'Mr')}
      //         name={this.state.persons[1].name} 
      //         age={this.state.persons[1].age} />
      //       <Person 
      //         name={this.state.persons[2].name} 
      //         age={this.state.persons[2].age}>
      //           I come from china
      //       </Person>  */}
      //     </div>
      // )
      // style.backgroundColor = "gray"
    }
    // const classes= ["red","bold"].join(" ")
    
    return (
      <div className="App">
        {/* <h1 className={classes.join(" ")}>大家好</h1> */}
        {/* <button style={style} onClick={this.changeAge.bind(this,'miss')}>过年了</button> */}
        {/* <button style={style} onClick={this.changeText}>切换内容</button> */}
        <MyHeader 
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.changeText}/>
        {persons}
        {/* {
          this.state.showPerson?
          <div>
            <Person 
          changed={this.changeName}
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
          <Person 
           myClick={this.changeAge.bind(this,'Mr')}
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>
            I come from china
        </Person>
          </div> : null
        } */}
        
      </div>
    )
  }
}
export default App;
