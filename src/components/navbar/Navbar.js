import React, { useState } from 'react';
import {MenuItems} from './MenuItems';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar (){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return(
        <nav className="NavbarItems">
            <h3 className="logo"><i class="fa fa-book-reader"></i> LMS</h3>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul  className={click ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return(
                        <li>
                            <Link className={item.cName} to={item.url}>
                            {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        )
}

export default Navbar;