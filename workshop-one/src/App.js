import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './tasks/Task'


const dummyTaskData = [
  {title: "Cut the cat's claws",
  description: "Biggles and Wolfie pedicures. Cat clippers need resharpening first."},
  {title: "Build a new cat tree",
  description: "New cat tree for 2nd floor landing.Check Ikea hackables"},
  {title: "Buy flea drops",
  description: "All three. Do before end of April"},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
        <Task title ="set new quiz" description="Peasy challenges"/>
        <Task title ="mark coursework" description="Green ticks abound"/>
        <Task title ="plan day 2" description="Code all day, err'day"/>
        </section>
      </div>
    );
  }
}

export default App;
