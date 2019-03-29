import React, { Component } from 'react';
import './App.css';

interface IAppState{
  age: number
}

class App extends Component<any, IAppState> {

  constructor(props: any){
    super(props)
    this.state = {
      age: 0
    }

    this.incrementAge = this.incrementAge.bind(this)
    this.decrementAge = this.decrementAge.bind(this)
  }

  incrementAge(){
    const { age } = this.state
    this.setState({
      age: age + 1
    })
  }

  decrementAge(){
    const { age } = this.state
    this.setState({
      age: age - 1
    })
  }

  render() {
    return (
      <div className="App">
       <p>My Age: {this.state.age} </p>
       <button onClick={this.incrementAge}>+</button>
       <button onClick={this.decrementAge}>-</button>
      </div>
    );
  }
}

export default App;
