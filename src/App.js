import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloMsg from './HelloMsg'
import Person from './person'
import Timer from './timer'
import Todo from './Todo'

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <HelloMsg name="Swathi" email="swathi@gmail.com"/>
       <Timer/>
       <HelloMsg name="Divya" email="divya@gmail.com"/>
       <HelloMsg name="Bhuvana" email="bhuvana@gmail.com"/>
       <HelloMsg name="Krishna" email="krishna@gmail.com"/>  */}

       <Todo/>
      </div>
    );
  }
}

export default App;
