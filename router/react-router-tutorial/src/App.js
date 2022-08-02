// router and switch are components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import Nav from './components/Nav'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          {/* i.e. if the path matches then load the specified page, from top to bottom  */}
          {/* exact removes the possibility of partial matches */}
          {/* < /> determines a react component */}
          <Route exact path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
)}

export default App