import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.png'

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-white justify-content-center">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="MovIndex" style={{ height: '7em' }} />
      </Link>
    </nav>
  )
}
