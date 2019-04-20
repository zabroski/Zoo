import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Zoo</h4>
        <form> 
          <input type="text" className="Annimalname" placeholder="Name" />
          <br />
          <select>
            <option value="Lion">Lion</option>
            <option value="pig">Pig</option>
            <option value="horse">horse</option>
            <option value="monkey">monkey</option>
          </select>
          <br />
          <input type="radio" name="gender" value="male" /> <label>Male</label>
          <br />
          <input type="radio" name="gender" value="female" /><label>Female</label>
          <br />
          <select>
          {/* <label>Select contry:</label> */}
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Mali">Mali</option>
            <option value="Senegal">Senegal</option>
            <option value="Afrique du Sud">Afrique du Sud</option>
          </select>

          {/* <input type="text" className="contry" placeholder="Contry" /> */}
          <br />
          <input type="date" className="bday" placeholder="Birtday" />
        </form>
        <br />
        <p>Congratulation you add annimal at the zoo</p>
        <button type="click" onClick="">Add</button>
        <br/>
        <a href="">View</a> 
      </div>
    );
  }
}

export default App;
