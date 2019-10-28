import React, { createContext, Component } from 'react';

const { Provider, Consumer } = createContext();

class TasksProvider extends Component {
  state = {
    tasks: [
      { id: 0, title: 'una tarea', done: true },
      { id: 1, title: 'segunda tarea', done: false },
      { id: 2, title: 'tercera tarea', done: false }
    ],
    title: '',
    editingId: -1,
    done: false,
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

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
    return (
      <Provider value={{
        ...this.state,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit,
        handleEdit: this.handleEdit,
        handleToggleTask: this.handleToggleTask,
      }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { TasksProvider, Consumer as TasksConsumer };
