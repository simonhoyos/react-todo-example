import React, { Component } from 'react';
import './App.css';
import { Tasks } from './components/Tasks';
import { Form } from './components/Form';
import { TasksProvider } from './Context';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TasksProvider>
          <Tasks />
          <Form />
        </TasksProvider>
      </div>
    );
  }
}

export default App;
