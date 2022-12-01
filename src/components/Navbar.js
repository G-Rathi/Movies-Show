import React from 'react'
import '../styles/Navbar.css'


const Navbar = () => {


    return (
        <div className='nav_Container'>
            <div className='logoText'>WATCH MOVIES</div>
            <div className='navItems'>
                <span>Blogs</span>
                <span>Movies</span>
                <span>TV Shows</span>
                <span>Web Series</span>
            </div>
            <div className='navIcons'>
                <span><i className="fa-regular fa-user" /></span>
                <span><i className="fa-regular fa-heart" /></span>
            </div>

        </div >
    )
}

export default Navbar