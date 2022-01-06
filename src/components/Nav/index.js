import React from 'react';
const navItems = [
    {
        "name": "about",
        "description": "detailed section about my experience"
    },
    {
        "name": "portfolio",
        "description": "section to see my work and past projects"
    },
    {
        "name": "contact",
        "description": "section that has all my contact information"
    }
];



function Nav() {
    return (
        <header className="flex-row space-between px-1">
            
            <nav className="flex-row">
            <img src={require('../../assets/icons/ironman.png').default} className="coreicon" alt="iron man core reactor image" />
                <ul className="nodotsul flex-row space-between">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a href="#">{item.name}</a>
                        </li>
                    ))}
                </ul>
                
            </nav>
        </header>
    )
}

export default Nav;