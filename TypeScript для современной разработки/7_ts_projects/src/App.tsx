import { type } from '@testing-library/user-event/dist/type';
import React, { useState,useEffect } from 'react';
import ToDOList from './components/ToDoList';
import { NewToDoForm } from './components/NewToDoForm';
import { ToDo } from "./components/types"



function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState<ToDo[]>([])

  const handleCLick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)

  }
  const AddTodo = () => {
    const newToDo: ToDo = {
      id: new Date().toString(),
      title: text,
      completed: false

    }
    setTodos([newToDo, ...todos])
    setText('')
  }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((data: ToDo[]) => {
      setTodos(data)
    })
   
  }, [])
  

  return (
    <div className="App">
      <NewToDoForm
        onChange={handleCLick}
        handleClick={AddTodo}
        value={text}
      />
      <ToDOList list={todos} />
    </div>
  );
}

export default App;
