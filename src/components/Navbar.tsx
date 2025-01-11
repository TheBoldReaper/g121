import { Link } from "react-router-dom"
import './css/navbar.css'
import opportunityHubLogo from '../assets/logo.png'
import searchIcon from '../assets/search.png'

function login() {
    console.log("Triggered Login")
}
function search() {
    console.log("Triggered Search")
}

function Navbar() {
    return (
        <header className="navbar">
            <nav className="container-xl">
                <Link className="icon" to="/">
                    <img src={opportunityHubLogo} />
                </Link>
                <div className="items">
                    <Link to="/consultation">Consultation</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/resources">Resources</Link>
                    <Link to="/aboutus">About Us</Link>
                </div>
                <div className="utils">
                    <button className="login" type="button" onClick={login}>Login</button>
                    <button className="search" type="button" onClick={search}>
                        <img src={searchIcon} />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar