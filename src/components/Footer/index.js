import React from 'react';

function Footer() {
    const socialMedia = [
        {
            "name": "linkedin",
            "source": "https://www.linkedin.com/in/riley-smith-0882356a/"
        }, 
        {
            "name": "facebook",
            "source": "https://www.facebook.com/riley.smith.7169709"
        },
        {
            "name": "github",
            "source": "https://github.com/grsmith35"
        }
    ]
    
    return (
        <div>
            <ul className="nodotsul flex-row flex-end">
                        {socialMedia.map((site) => (
                            <li key={site.name}>
                                <a href="#">
                                    <img src={require(`../../assets/icons/${site.name}.png`).default}
                                        alt={site.name}
                                        className="socialmedia"
                                        key={site.name}
                                        />
                                </a>
                            </li>
                        ))}
                    </ul>
        </div>
    )
}

export default Footer