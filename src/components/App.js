import React, { Component } from 'react';
import './App.css';

import TaskList from './TaskList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Task List</h1>
        </header>
        <p className="App-intro">
          <TaskList />
        </p>
      </div>
    );
  }
}

export default App;
