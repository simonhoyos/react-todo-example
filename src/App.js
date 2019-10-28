import React, { Component } from 'react';
import './App.css';
import { Tasks } from './components/Tasks';
import { Form } from './components/Form';

class App extends Component {
  state = {
    tasks: [
      { id: 0, title: 'una tarea', done: true },
      { id: 1, title: 'segunda tarea', done: false },
      { id: 2, title: 'tercera tarea', done: false },
      { id: 3, title: 'tercera tarea', done: false },
      { id: 4, title: 'tercera tarea', done: false },
    ],
    title: '',
    editingId: -1,
    done: false,
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const id = this.state.editingId > -1 ?
      this.state.editingId :
      this.state.tasks.length;

    const newTask = {
      id,
      title: this.state.title,
      done: this.state.done,
    };

    let tasks;
    if (this.state.editingId < 0) {
      tasks = [ ...this.state.tasks, newTask ];
    } else {
      tasks = this.state.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            ...newTask,
          }
        }

        return task;
      });
    }

    this.setState({
      tasks,
      title: '',
      editingId: -1,
      done: false,
    });
  }

  handleEdit = (id, title, done) => {
    this.setState({
      editingId: id,
      title,
      done
    });
  }

  handleToggleTask = id => {
    const tasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        }
      }

      return task;
    });

    this.setState({ tasks });
  }

  render() {
    const { tasks, title, editingId } = this.state;
    return (
      <div className="App">
        <Tasks
          tasks={tasks}
          handleEdit={this.handleEdit}
          handleToggleTask={this.handleToggleTask}
        />
        <Form
          title={title}
          editingId={editingId}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
