import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className='navbar bg-primary'>
        <h1>Github Profile Fetcher</h1>
        <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about" >About</Link>
        </div>
        </nav>
    ) ;
}
