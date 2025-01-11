import { Link } from "react-router-dom"
import './css/navbar.css'
import opportunityHubLogo from '../assets/logo.png'

function Navbar(){
    return (
    <header className="navbar">
        <nav className="container-xxl">
            <Link className="icon" to="/g121/">
                <img src={opportunityHubLogo} />
            </Link>
            <div className="items">
                <Link to="/g121">Consultation</Link>
                <Link to="/g121">Courses</Link>
                <Link to="/g121">Resources</Link>
                <Link to="/g121">About Us</Link>
            </div>
            <div className="utils">
                <span>Login</span>
            </div>
        </nav>
    </header>
    )
}

export default Navbar