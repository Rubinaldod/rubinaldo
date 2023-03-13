import React from 'react'
import './header.css'

const Header =()=>{
    return(
       <header>
        <nav className="nav container">
            <a href="index.html" className="nav_logo">Rubinaldo</a>
            <div className="menu">
                <ul className="nav_list grid">
                    <li className="navitem"><a href="" className="nav_link"><i className="uil uil- nav_icon"></i></a></li>
                </ul>
            </div>
        </nav>
       </header>
    )
}

export default Header