import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './components/app'
import Router from '../src/router/index'
import './static/reset.css'
import * as serviceWorker from './serviceWorker';

let name="myj"
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(app(), document.getElementById('root'));
// ReactDOM.render(<App name={name}/>, document.getElementById('root'));
ReactDOM.render(<Router/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
