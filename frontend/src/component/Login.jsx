import React from 'react'
import userLogo from '../assets/user.gif'
import logo from '../assets/task_loader.gif'

function Login() {
  return (
    <>
      <div className="login">
        <div className="login_box">
          <div className="left">
            <img src={logo} alt="task" />
            <h1>Welcome Back <span>!</span></h1>
            <p>Login to access your secure <span>E-NoteBook</span> and continue managing your notes safely</p>
          </div>
          <div className="right">
            <img src={userLogo} alt="user" />
            <form>
              <input name="email" type="email" placeholder="Enter your email" />
              <input name="password" type="password" placeholder="Enter your password" />
              <p id="forgot_password">Forgot Password ?</p>
              <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <span>Signup</span></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login