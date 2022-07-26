import React from "react"

function App() {
  // message is the variable with the text stored and setMessage changes the message stored
  const [message, setMessage] = React.useState("JavaScript is so cool.");

  function handleClick() {
    setMessage("my new message")
  }
  
  return (
    <div className="App">
      <h1>{message}</h1>
      <button onClick={handleClick}>Update Message</button>
    </div>
  )
}

export default App;
