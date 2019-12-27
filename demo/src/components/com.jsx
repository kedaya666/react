import React , { Component } from 'react'
class Com extends Component{
    constructor(props){
        super(props)
        this.state = {
            userName:"myj",
            age:18,
            sex:"",
            hobby:["篮球"],
            city:"上海"

        }
    }
    changeModule(e){
        console.log(e.target.value)
        // let arr= []
        if(e.target.checked){
            this.state.hobby = this.state.hobby.filter((i)=>{
                if(i == e.target.value){
                    return false
                }else{
                    return true
                }
            })
        }
        this.setState({
            //此处必须用dom节点自带的属性才可以动态绑定
            // [e.target.name]: e.target.type=="checkbox"||e.target.type=="radio"?e.target.checked:e.target.value
            // [e.target.name]: e.target.value
            [e.target.name]: e.target.type=="checkbox"?this.state.hobby:e.target.value
        })
    }
    render(){
        return <div>
                    <ul>
                        <li>
                            <label>用户名:{this.state.userName}</label>
                            <input type="text" name="userName" value={this.state.userName} onChange={this.changeModule.bind(this)}/>
                        </li>
                        <li>
                            <label>年龄:{this.state.age}</label>
                            <input type="text" name="age" value={this.state.age} onChange={this.changeModule.bind(this)}/>
                        </li>
                        <li>
                            男：<input type="radio" name="sex" value="男" checked={this.state.sex=="男"} onChange={this.changeModule.bind(this)}/>
                            女：<input type="radio" name="sex" value="女" checked={this.state.sex=="女"} onChange={this.changeModule.bind(this)}/>
                        </li>
                        <li>
                            <label>爱好</label><br/>
                            篮球
                            <input type="checkbox" name="hobby" value="篮球" checked={this.state.hobby.some((i)=>{if(i=="篮球"){return true}else{return false}})} onChange={this.changeModule.bind(this)}/>
                            <br/>足球
                            <input type="checkbox" name="hobby" value="足球" checked={this.state.hobby.some((i)=>{if(i=="足球"){return true}else{return false}})} onChange={this.changeModule.bind(this)}/>
                            <br/>羽毛球
                            <input type="checkbox" name="hobby" value="羽毛球" checked={this.state.hobby.some((i)=>{if(i=="羽毛球"){return true}else{return false}})} onChange={this.changeModule.bind(this)}/>
                        </li>
                        <li>
                            <label>城市</label>
                            <select name="city" value={this.state.city} onChange={this.changeModule.bind(this)}>
                                <option value="北京" checked={this.state.city == "北京"}>北京</option>
                                <option value="上海" checked={this.state.city == "上海"}>上海</option>
                                <option value="广州" checked={this.state.city == "广州"}>广州</option>
                            </select>
                        </li>
                    </ul>
               </div>
    }
    componentDidMount(){

    }
}

export default Com