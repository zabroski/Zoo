import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h4>Zoo</h4>
      <form> 
      Name:
      <input type="text" className="Annimalname" placeholder="name" ></input>
      Type of annimal:
      <input type="text" className="type"></input>
      Sex:
      <input type="text" className="sex"></input>
      Contry:
      <input type="text" className="contry"></input>
      Birthday:
      <input type="date" className="bday"></input>
      </form>
      <p>Congratulation you add annimal at the zoo</p>
      <button type="click" onClick="">Add</button>
      <br/>
      <a href="">View</a>
       
      </div>
    );
  }
}

export default App;
