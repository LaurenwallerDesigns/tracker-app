import React from 'react';

export default function Header() {
    return ( 
        <header>
            <h1 className = "title"> Tracker </h1> 
            <div className = "start-buttons">
                <button> Log In </button>
                <button> Sign Up </button> 
            </div> 
        </header>
    );
}