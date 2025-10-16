import React, { useState } from 'react';
import './Dropdown.css';
import { NavLink, Link } from "react-router-dom";

function Dropdown({ items = [] }) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <ul
            onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {items.map((item) => (
                <li key={item.path || item.title}>
                    <NavLink
                        className={item.cName}
                        to={item.path}
                        onClick={() => setClick(false)}
                    >
                        {item.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

export default Dropdown;