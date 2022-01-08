import React from 'react';
import './contact.css'

export default function Contact() {
    

    return (
        <div className="container columns">
            <form className="mx-auto column is-4" action="mailto:gordonrileysmith@gmail.com" method="post" encType="text/plain">
                <label for="name">Name</label>
                <br />
                <input className="input is-medium" name="name" required></input>
                <br />
                <label for="email">Email</label>
                <br />
                <input type="email" className="input is-medium" name="email" required></input>
                <br />
                <label for="message">Message</label>
                <br />
                <textarea className="textarea is-medium" name="message" required></textarea>
                <br />
                <button className="button is-dark" type="submit">Submit</button>
            </form>
        </div>
    )
}