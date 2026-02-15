import React from 'react'
import logo from '../assets/logo.gif'

function Header() {
  return (
    <>
      <nav>
        <div className="left">
          <img className="logo" src={logo} alt="E-NoteBook" />
          <h2>E-NoteBook</h2>
        </div>

        <div className="right">
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
        
      </nav>
    </>
  )
}

export default Header