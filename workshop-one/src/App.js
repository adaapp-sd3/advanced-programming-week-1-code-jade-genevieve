import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Task from './tasks/Task'
import Task from './tasks/FunctionalTask'



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
        {dummyTaskData.map((item, i) => <Task key={i} title = {item.title} description = {item.description}/>)} 
        </section>
      </div>
    );
  }
}

export default App;
