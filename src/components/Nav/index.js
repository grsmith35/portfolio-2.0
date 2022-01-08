import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import './nav.css'

function Nav() {
    const navItems = [
        "about",
        "portfolio",
        "contact",
        "resume"
    ];

    const [currentChoice, setCurrentChoice] = useState("")

    function handleSelection(item) {
        setCurrentChoice(item);
    };

    function test() {
        console.log(test)
    }

    function handleChoiceStyling(key) {
        console.log(key)
        if(key === currentChoice) {
            console.log('matches')
            return 'className="selectednavoption"'
        }
        console.log("Doesn't match")
        return 'className="navoption"'
    }

    return (
        <header className="flex-row space-between px-1">
            
            <nav className="flex-row">
                <img src={require('../../assets/icons/ironman.png').default} className="coreicon" alt="iron man core reactor image" />
                <h1>Riley Smith</h1>
                <ul className="nodotsul flex-row space-between">
                    {navItems.map((item) => (
                        <li key={item} onClick={() => handleSelection(item)} className={() => handleChoiceStyling}>
                            <a href="#">{capitalizeFirstLetter(item)}</a>
                        </li>
                    ))}
                </ul>
                
            </nav>
        </header>
    )
}

export default Nav;