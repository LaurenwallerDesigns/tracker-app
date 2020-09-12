import React from 'react';

export default function Header(props) {
    return ( 
        <header>
            <h1 className = "title"> Tracker </h1> 
            <div className = "start-buttons">
                <button onClick={props.onClick} id="signIn"> Log In </button>
                <button onClick={props.onClick} id="register"> Sign Up </button> 
            </div> 
        </header>
    );
}