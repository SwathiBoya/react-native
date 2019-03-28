import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class HelloMsg extends Component {
  constructor(props){
    super(props);
    this.state = {
        helloName:"Test App" ,
        name:props.name,
        email: props.email
    };
  }
  //helloName = "Test App";
  sayHello(appName){
    // this.helloName = appName;
    // console.log('Value is:' + this.helloName);
    // this.forceUpdate();
    // this.state.helloName=appName;
    this.setState({helloName:appName, name:'Divya', email:"divya@gmail.com"});
    // alert("Hello Everyone")
}
  render() {
    console.log(">>render...");
    return (
      <div className="App">
        <h2>{this.state.helloName}</h2>
       <h3>{this.state.name} | {this.state.email}</h3>
       <button onClick={()=>this.sayHello('Intro App')}>Hello Participants</button>
      </div>
    );
  }
}

export default HelloMsg;
