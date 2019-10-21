import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList'


class App extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        ToDOAPP
        <AddTask/>
        <TaskList/>
      </div>
     );
  }
}
 
export default App;
