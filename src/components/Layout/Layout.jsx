import { Outlet } from 'react-router'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.css'

export default function Layout() {
    return (
        <div className="Layout">
            <Header />
            <main className="layoutMain">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}