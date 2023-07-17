import { useNavigate } from "react-router-dom";
import {useAuth} from '../contexts/AuthContext'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const { user, signout } = useAuth()
  const navigate = useNavigate()


  const handleSignout = () => {
    signout()
    navigate('/signin')
    window.location.reload()
  }

  return (
    <header className="header">
      <Link to={'/'}><img id='Logo' src="/1618916.svg" alt="Logo" /></Link>
      <nav className="navbar">
        {!user ?
          <>
            <NavLink className={({ isActive }) => `color-red ${isActive ? "color-blue" : "color-yellow"}`} to='/signin'>Sign in</NavLink>
            <NavLink className={({ isActive }) => `color-red ${isActive ? "color-blue" : "color-yellow"}`} to='/signup'>Sign up</NavLink>
          </>
          :
          <>
            <div className='user'>{user?.name}</div>
            <div className='signout' onClick={handleSignout}>signout</div>
          </>
        }
      </nav >
    </header >
  )
}



export default Navbar