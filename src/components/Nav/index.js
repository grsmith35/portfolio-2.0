import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
    const navItems = [
        "about",
        "portfolio",
        "contact",
        "resume"
    ];

    return (
        <header className="flex-row space-between px-1">
            
            <nav className="flex-row">
                <img src={require('../../assets/icons/ironman.png').default} className="coreicon" alt="iron man core reactor image" />
                <h1>Riley Smith</h1>
                <ul className="nodotsul flex-row space-between">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a href="#">{capitalizeFirstLetter(item)}</a>
                        </li>
                    ))}
                </ul>
                
            </nav>
        </header>
    )
}

export default Nav;