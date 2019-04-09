import React, { Component } from 'react';
import './App.css';
import Todo from './component/Todo';

interface IAppState{
  email:string
}

class App extends Component<any, IAppState> {

  constructor(props: any){
    super(props)
    this.state = {
      email: ""
    }

    this.changeMyInput = this.changeMyInput.bind(this)
  }

  changeMyInput(e: React.ChangeEvent<HTMLInputElement>){
    this.setState({
      ...this.state,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  render() {
    return (
      <div className="App">
        <input name="email" value={this.state.email} onChange={this.changeMyInput} />
      </div>
    );
  }
}

export default App;
