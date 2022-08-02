import React from "react"
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to="/">Home Page</Link>
      <Link to="/about">About Page</Link>
      <Link to="/contact">Contact Page</Link>
    </nav>
  )
}

export default Nav