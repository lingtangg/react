import React from "react"
import "./TodoItem.css"

// React functions must start with a capital
function TodoItem(props) {
  const { todo, index, completeTodo, removeTodo } = props
  return (
    <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
      {todo.text}
      <div>
        {/* make the completeTodos its own function otherwise react will keep rendering it  */}
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  )
}

export default TodoItem