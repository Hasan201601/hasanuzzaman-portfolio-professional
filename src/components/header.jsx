import React, { useContext, useState } from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { ThemeContext } from "../context";
import { NavHashLink } from "react-router-hash-link";
import { HeaderData } from "../data/headerData";

const Header = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <>
            <IconContext.Provider value={{ color: 'white' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars style={{ color: darkMode ? "white" : "#59b256" }} onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} style={{ backgroundColor: darkMode ? 'black' : '#59b256', color: darkMode ? '#59b256' : 'black' }}>
                    <ul className='nav-menu-items' >
                        <div className='navbar-toggle' >
                            <Link to='#' className='menu-bar-close' onClick={showSidebar}>
                                <AiIcons.AiOutlineClose style={{ color: 'white', transition: "all 3s ease-out" }} />
                            </Link>
                        </div>
                        {HeaderData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <NavHashLink to={item.path} style={{ color: 'white' }} onClick={showSidebar}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </NavHashLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default Header;