import React from 'react'
import heroImage from '../assets/hero.gif'

function Home() {
    return (
        <>
            <div className="hero">
                <img src={heroImage} alt="Image" />
                <h1>E-NoteBook</h1>
                <p>is a <span>Secure Digital NoteBook</span> in the cloud.That keeps your ideas <span>Safe</span> and <span>Accessible</span> anytime,
                    Manage your notes effortlessly. With seamless <span>Signup</span> &amp; <span>Login</span> authentication with full <span>CRUD</span> functionality — <span>Fast, Simple, and Protected</span>.
                    Your ideas deserve <span>Security</span> and <span>Simplicity</span>.
                    All notes are organized efficiently to help you stay productive.
                    Designed to keep your thoughts organized.
                </p>

                <div className="hero-btns">
                    <button className="signup-btn" type="button">Signup</button>
                    <button  className="login-btn" type="button">Login</button>
                </div>
            </div>
        </>
    )
}

export default Home