import { useNavigate } from "react-router-dom";
import {useAuth} from '../contexts/AuthContext'
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
    <header className='bg-slate-900 h-11 text-white flex flex-wrap justify-between items-center'>
      <Link to={'/'}><img id='Logo' src="/1618916.svg" alt="Logo" className="cursor-pointer" /></Link>
      <nav className="flex justify-center items-center gap-5">
        {!user ?
          <>
            <NavLink className={({ isActive }) => `border-b-[2px] ${isActive ? "border-b-rose-200" : "border-b-transparent"}`} to='/signin'>Sign in</NavLink>
            <NavLink className={({ isActive }) => `border-b-[2px] ${isActive ? "border-b-rose-200" : "border-b-transparent"}`} to='/signup'>Sign up</NavLink>
          </>
          :
          <>
            <div className='text-blue-200'>{user?.name}</div>
            <div className='text-rose-200 cursor-pointer' onClick={handleSignout}>signout</div>
          </>
        }
      </nav >
    </header >
  )
}



export default Navbar