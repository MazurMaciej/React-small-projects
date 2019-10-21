import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList'


class App extends React.Component {
  state = {
    tasks: [{
      id: 0,
      text: "wynieśc smieci",
      date: "2018-02-15",
      important: true,
      active: true,
      finishDate: null,
    },
    {
      id: 1,
      text: "posprzatac w lazience",
      date: "2018-02-15",
      important: true,
      active: true,
      finishDate: null,
    },
    {
      id: 2,
      text: "zrobic zakupy",
      date: "2018-02-15",
      important: true,
      active: true,
      finishDate: null,
    },
    {
      id: 3,
      text: "umyc naczynia",
      date: "2018-02-15",
      important: true,
      active: true,
      finishDate: null,
    }
    ]
  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks,
    })
  }

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }


  render() {
    return (
      <div className="App">
        ToDOAPP
        <AddTask />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
