import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    const menubar = <>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/appointment'>APPOINTMENT</Link></li>
        <li><Link to='/review'>REVIEW</Link></li>
        <li><Link to='/contact'>CONTACT</Link></li>
        <li><Link to='/about'>ABOUT</Link></li>
        <li><Link to='/login'>LOGIN</Link></li>
    </>
    return (
            <div className="navbar bg-base-100 ">
                <div className=" navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menubar}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl m-auto">DOCTORS PROTAL</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menubar}
                    </ul>
                </div>
            </div>
    );
};

export default Header;