import { useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const { user, signout } = useAuth()
  const navigate = useNavigate()


  const handleSignout = () => {
    signout()
    navigate('/signin')
    navigate(0)
  }

  return (
    <header className='navbar-header'>
      <Link to={'/'}><img id='Logo' src="/1618916.svg" alt="Logo" className="cursor-pointer" /></Link>
      <nav className="flex justify-center items-center gap-5">
        {!user ?
          <>
            <div className="navbar-linkWrapper">
              <NavLink className='navbar-navlink' to='/signin'>Sign in</NavLink>
              <NavLink className='navbar-navlink' to='/signup'>Sign up</NavLink>
            </div>
          </>
          :
          <>
            <div className='navbar-user'>Hello{user?.name}</div>
            <div className='navbar-signout' onClick={handleSignout}>signout</div>
          </>
        }
      </nav >
    </header >
  )
}



export default Navbar