import React from 'react';
import ReactDOM from 'react-dom';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  startTimer(){
    this.interval = setInterval(() => this.tick(), 1000);
  }
  stopTimer(){
    clearInterval(this.interval);
  }
  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  resetTimer() {
    this.state.seconds = 0
  }
  render() {
    return (
      <div>
        Seconds: {this.state.seconds}<br/>
        <button onClick={()=>this.stopTimer()}>Stop</button> | <button onClick={()=>this.startTimer()}>Start</button> | <button onClick={()=>this.resetTimer()}>Reset</button>
      </div>
    );
  }
}

