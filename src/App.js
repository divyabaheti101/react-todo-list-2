
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  // You can call useEffect as many times as you want.
  // Here since params are not passed into [], it will be called only once after render.
  // this added to fetch todos, on every refresh, the below one on it's own doesn't work.
  // if u remove the if condition, it won't work.
  // bcoz any time u refresh the page the todos will be empty. -> useState([])
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if(storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  // parameter todos passes in [] means every time there is a change to todo useEffect will be called.
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function addTodo(text){
    setTodos([...todos, text])
  }


  function removeTodo(index){
    setTodos(todos.filter((todo, i) => i !== index))
  }

  function editTodo(index, text) {
    const newTodos = [...todos]
    newTodos[index] = text
    setTodos(newTodos)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={(event) => {
        event.preventDefault()
        addTodo(event.target.elements.todo.value)
        event.target.elements.todo.value = ''
      }}>
        <input type='text' name='todo' />
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type='text' value={todo} onChange={(event) => editTodo(index, event.target.value)} />
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
