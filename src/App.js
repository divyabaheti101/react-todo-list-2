
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(text){
    setTodos([...todos, text])
  }


  function removeTodo(index){
    setTodos(todos.filter((todo, i) => i !== index))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <input type='text' name='todo' />
        <button type='submit'>Add Todo</button>
      </form>
      
    </div>
  );
}

export default App;
