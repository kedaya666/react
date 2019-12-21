import React from 'react'
import classes from './header.css'
// 无状态组件
const MyHeader = (props) => {
    const style = {
        backgroundColor: 'green',
        color:'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '9px',
        cursor: 'pointer'
    }
    if(props.showPerson){
        style.backgroundColor = "gray"
    }
    const addClasses= []
    if(props.persons.length<=2){
        addClasses.push(classes.red)
    }
    if(props.persons.length<=1){
        addClasses.push(classes.bold)
    }
    return (
        <div>
            <h1 className={addClasses.join(" ")}>大家好</h1>
            {/* <button style={style} onClick={this.changeAge.bind(this,'miss')}>过年了</button> */}
            <button style={style} onClick={props.clicked}>切换内容</button>
        </div>
    )
}
export default MyHeader