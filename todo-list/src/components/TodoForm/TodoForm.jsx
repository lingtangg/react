import React, { useState } from "react"

function TodoForm(props) {
  const { addTodo } = props
  const [value, setValue] = useState("")

  // When we detect a change in our input field we want to update our input field's value
  function handleChange(event) {
    setValue(event.target.value)
  }

  // When we detect a submission, using the enter key we want to take the input fields value and send it to its parent
  const handleSubmit = (event) => {
    // prevents the "confirm form submission" pop-up
    event.preventDefault()
    if (!value) {
      return
    }
    addTodo(value)
    setValue("")
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
      value={value}
      type="text" 
      placeholder="Add Todo..."
      onChange={handleChange} 
      />
    </form>
  )
}

export default TodoForm