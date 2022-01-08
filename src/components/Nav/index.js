import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import './nav.css'
import { Link } from 'react-router-dom';

function Nav() {
    const navItems = [
        "about",
        "portfolio",
        "contact",
        "resume"
    ];

    const [currentChoice, setCurrentChoice] = useState("about")

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
            return true
        }
        console.log("Doesn't match")
        return false
    }

    function getItem(item) {
        console.log(item)
        const theClass = handleChoiceStyling(item);
        return <div className={theClass}>{item}</div>
    }

    return (
        <header className="conatainer">
            
            <nav className="columns is-flex-wrap-wrap">
                <div className="column is-2">
                    <img src={require('../../assets/icons/ironman.png').default} className="coreicon" alt="iron man core reactor image" />
                </div>
                <div className="column is-3">
                    <h1 className="myname">Riley Smith</h1>
                </div>
                
                <div className="column is-7 flex-end is-flex-wrap-wrap">
                    {navItems.map((item) => (
                    
                            <Link to={item} className="is-inline is-flex-grow-0 navoption"> {capitalizeFirstLetter(item)}</Link>
                    
                    ))}
                </div>
                
            </nav>
        </header>
    )
}

export default Nav;