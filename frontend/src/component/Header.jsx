import React, { useEffect } from 'react'
import logo from '../assets/logo.gif'
import { Link, useLocation } from 'react-router-dom'



function Header() {

  // const [isHomeActive, setIsHomeActive] = useState(false)

  const location = useLocation()
  // const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname !== "/home" && location.pathname !== "/") {
      const homeMenu = document.getElementById("home")
      homeMenu.classList.remove("active")
    }

    else if (location.pathname === "/home" || location.pathname === "/") {
      const homeMenu = document.getElementById("home")
      homeMenu.classList.add("active")
    }
  }, [location.pathname])


  // const navClick = () => {
  //   navigate("/home")
  //   setIsHomeActive(true)
  // }


  return (
    <>
      <nav>
        <div className="left">
          <Link to={"/"}><img src={logo} alt="E-NoteBook" /></Link>
          {/* <img onClick={navClick} src={logo} alt="E-NoteBook" /> */}
          <Link to={"/"}><h2>E-NoteBook</h2></Link>
        </div>

        <div className="right">
          <ul>
            <li><Link id='home' className={`active ${location.pathname === "/home" ? "active" : ""}`} to={"/home"}> Home</Link></li>
            <li><Link className={`${location.pathname === "/about" ? "active" : ""}`} to={"/about"}> About</Link></li>
          </ul>
        </div>

      </nav>
    </>
  )
}

export default Header