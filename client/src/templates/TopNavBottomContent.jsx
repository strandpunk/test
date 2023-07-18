import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './TopNav.css'

const TopNavBottomContent = () => {
    return (
        <article className='flex flex-col w-100vw'>
            <Navbar />
            <main className='bg-slate-500 h-100vh pt-11 h-screen flex justify-center'>
                <Outlet />
            </main>
        </article>
    )
}

export default TopNavBottomContent