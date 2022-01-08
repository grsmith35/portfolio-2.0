import React from 'react';
import './footer.css'

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
        <footer className="footer is-flex-wrap-wrap">
            <div className="flex-start">Made by <span className="name">Riley Smith</span></div>
            <div className="flex-row flex-end">
                        {socialMedia.map((site) => (
                            <div key={site.name} className="mx-3">
                                <a href={site.source}>
                                    <img src={require(`../../assets/icons/${site.name}.png`).default}
                                        alt={site.name}
                                        className="socialmedia"
                                        key={site.name}
                                        />
                                </a>
                            </div>
                        ))}
                    </div>
        </footer>
    )
}

export default Footer