import React from 'react'
import logo from '../assets/logo.gif'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav>
        <div className="left">
          <Link to={"/"}><img className="logo" src={logo} alt="E-NoteBook" /></Link>
          <Link to={"/"}><h2>E-NoteBook</h2></Link>
        </div>

        <div className="right">
          <ul>
            <li><Link to={"/home"}> Home</Link></li>
            <li><Link to={"/about"}> About</Link></li>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Header