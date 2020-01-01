## 前期的知识准备：
1.JavaScript
2.HTML+CSS
3.构建工具：Webpack：https://yunp.top/init/p/v/1
4.安装node：npm：https://yunp.top/init/p/v/1
5.cnpm命令：http://npm.taobao.org/
6.官方文档：https://reactjs.org/docs/hello-world.html

## 创建React项目
npx create-react-app
cd react-demo
npm start


## 环境介绍
node_modules:非常大
public：入口文件
src：源码文件

## React基础知识
### JSX语法介绍
JSX语法：JavaScript + XML语法(HTML)
解读jsx语法：遇到<>按照HTML语法解析，遇到{}按照JavaScript

### 元素渲染

### 组件
组件的后缀可以是js，也可以是jsx
一个React项目，是由成千上万个组件组成

### porps属性
组件的复用性很重要

### 事件处理
1. this问题
2. 向事件处理程序传递参数

### State

### React生命周期函数
随着我们对React理解和使用越来越多，生命周期的参考价值越来越高
函数列表:
    componentWillMount:在组件渲染之前执行
    componentDidMount:在组件渲染之后执行
    shouldComponentUpdate:返回true和false，true代表允许改变，false代表不允许改变
    componentWillUpdate:数据在改变之前执行(state,props)
    componentDidUpdate:数据修改完成(state,props)
    componentWillReveiceProps:props发生改变执行
    componentWillUnmount:组件卸载前执行
子传父!!!
父传子!!!

### setState更新是同步还是异步
1.setState会引起视图的重绘
2.在可控的情况下是异步，在非可控的情况下是同步
es6的新特性参考：https://yunp.top/init/p/v/1#video_id=586

### 条件渲染

### 列表 & Key
主要问题是key

### 表单
1. 受控组件
2. 非受控组件

### Refs and the DOM
1.管理焦点，文本选择或媒体播放
2.触发强制动画
3.集成第三方 DOM 库

### 状态提升
组件之间的数据交互

### 组合 vs 继承
this.props.children

### 使用 PropTypes 进行类型检查
增强程序的健壮性