import React, { useState } from "react"
import TodoItem from "./components/TodoItem/TodoItem"
import TodoForm from "./components/TodoForm/TodoForm"
import "./App.css"

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about react",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool to do app",
      isCompleted: false,
    },
  ])

  const addTodo = (text) => {
    // ... allows something to be added to the list - spreading - adds todo to prevTodos list due to order
    // setTodos((prevTodos) => [...prevTodos, todo])
    // better way to do it by directly setting it 
    const newTodos = [...todos, {text}]
    setTodos(newTodos)
  }

  const completeTodo = (index) => {
    // create a clone of the todo list
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    // set the clone as the original
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1);
    setTodos(newTodos)
  }

  return (
  <div className="app">
  <div className="todo-list">
    <h1>My todo list</h1>
    {todos.map((todo, index) => (
      <TodoItem todo={todo} key={index} index={index} 
      completeTodo={completeTodo} 
      removeTodo={removeTodo} /> // key is never provided in the browser, only for react
    ))}
    {/* passing the function as a function so don't need to pass the parameters until we call it */}
    <TodoForm addTodo={addTodo} />
  </div>
  </div>
  )
}

export default App;
