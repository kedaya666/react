import React , { Component } from 'react'

//react注册组件的几种方式

// 1、采用函数抛出jsx语法的方式
// let renderFn= ()=>{
//     const element = (
//         <h1 className="greeting">
//             hello world
//         </h1>
//     )
//     return element
// }

// 2、采用createClass的方式进行开发（貌似目前已废弃）
/* let app = React.createClass({
    getInitialState(){ //相当于vue的date
        return {
            组件内自己维护的数据
        }
    }
    getDefaultProps: function(){//想当于vue的props，用来接收父组件传递的数据
        return {
            name" "zhangsan" //设置的默认值
        }
    }
    render(){
        return <div>今天天气真好</div>
    }
}) */

// 3、采用es6de class类的方式*
class LifeRound extends Component{
    constructor(props){//这里面可以用this，相当于vue的deforeCreat
        // 充当了父类的构造函数的角色，相当于new了一下父类的构造函数，new之后得到了this
        super(props)
        // return {} 在这里不要return，这里return谁this就指向谁
        this.state = {
            num: this.props.num?this.props.num:1 ,//1为默认值
            time:null
        }
        // 三种给事件绑定this的方法1、
        // this.changeFn=this.changeFn.bind(this)
    }
    componentWillMount(){//相当于vue的beforemount

    }
    changeFn(){
        this.setState({//此处的代码为异步代码
            num:this.state.num+1
        },()=>{//此处相当于vue的vm.nextTick
            console.log("a-----"+this.state.num)//2
        })
        console.log("b-----"+this.state.num)//1
    }
    render(){//相当于vue的template模板，返回虚拟dom
        return <div>
            生命周期{this.state.num}
            <div id="kp">0</div>
            {/* 三种给事件绑定this的方法2 */}
            {/* <button onClick={this.changeFn.bind(this)}>点我</button> */}
            {/* 三种给事件绑定this的方法3 */}
            <button onClick={()=>this.changeFn()}>点我2</button>
            {/* 三种给事件绑定this的方法1、---调用 */}
            {/* <button onClick={this.changeFn()}>点我</button> */}
            </div>
    }
    componentDidMount(){//相当于vue的mounted
        this.setState({
            time: setInterval(()=>{
                document.getElementById("kp").innerHTML = parseInt(document.getElementById('kp').innerHTML)+1
            },1000)
        })

    }
    // 数据更新过程
    componentWillReceiveProps(props){//相当于vue的computed计算属性

    }
    shouldComponentUpdate(props,state){
        if(state.num === this.state.num){
            return false
        }else{
            return true
        }
    }
    componentWillUpdate(){

    }
    componentDidUpdate(){

    }
    // 卸载过程
    componentWillUnmount(){
        clearInterval(this.state.time)
    }
}

export default LifeRound