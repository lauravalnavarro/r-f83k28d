import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    valor: 0
  }
  handleIncrement = () =>{
    this.setState({valor: this.state.valor + 1})
  }
  render() {
    return (
      <div>
        <span className="value">{this.state.valor}</span>
        <button id="inc" onClick={this.handleIncrement}>Incrementa</button>
      </div>
    );
  }
}

export default App;
