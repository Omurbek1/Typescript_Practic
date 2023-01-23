import React from 'react';
import ToDoItem from './components/ToDoItem';


function App() {
  return (
    <div className="App">
      <ToDoItem id='112' completed={ false} title='jhello' />
    </div>
  );
}

export default App;
