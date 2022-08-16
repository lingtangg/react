import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// assumed inheritance because the file is called index, don't have to directly infer file and just folder
import Nav from "./components/Nav"

// Import pages
import HomePage from "./pages/HomePage"
import ProjectPage from "./pages/ProjectPage"
import LoginPage from "./pages/LoginPage"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="projects/:id" element={<ProjectPage />} />
          <Route exact path="login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App