import { Link } from 'react-router'
import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="headerBlock">

                <Link
                    to="/"
                    className="headerLogoBlock">
                    VIN Decoder
                </Link>

                <nav className="headerListWithLinks">
                    <Link
                        to="/"
                        className="headerLink">
                        Home
                    </Link>

                    <Link
                        to="/variables"
                        className="headerLink">
                        Variables
                    </Link>
                </nav>

            </div>
        </header>
    )
}