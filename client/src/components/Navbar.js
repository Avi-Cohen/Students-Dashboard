import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <div className='container'>
            <div className="navbar">
                <nav>
                    <div className="logo">
                        <Link to="/">
                            <i className="fas fa-users"></i>
                        </Link>
                    </div>
                    <ul className="links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/add">Add Student</Link></li>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar