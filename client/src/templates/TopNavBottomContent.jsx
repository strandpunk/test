import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const TopNavBottomContent = () => {
    return (
        <article className='article'>
            <Navbar />
            <main className='main'>
                <Outlet />
            </main>
        </article>
    )
}

export default TopNavBottomContent