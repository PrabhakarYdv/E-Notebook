import React from 'react'
import userLogo from '../assets/user.gif'
import logo from '../assets/task_loader.gif'

function Signup() {
  return (
    <>
      <div className="signup">
        <div className="signup_box">
          <div className="left">
          <img src={logo} alt="task"/>
            <h1>Welcome to <span>E-NoteBook</span>!</h1>
            <p>Create your secure <span>E-NoteBook</span> and access your notes from anywhere</p>
          </div>
          <div className="right">
            <img src={userLogo} alt="user" />
            <form>
              <input name="name" type="text" placeholder="Enter your name" />
              <input name="email" type="email" placeholder="Enter your email" />
              <input name="password" type="password" placeholder="Create a password" />
              <input name="confirmPassword" type="password" placeholder="Enter password again" />
              <button type="submit">Signup</button>
            </form>
            <p>Already have an account? <span>Login</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup