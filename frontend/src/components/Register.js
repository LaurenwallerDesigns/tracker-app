import React from 'react';

export default function Register(props) {
    return (
        <form onSubmit={props.submit}>
            <button className="back-button">back</button>
            <h2 className="register-title">Sign Up</h2>
            <label htmlFor="fname">First Name:</label>
            <input type="text" id="fname" name="firstName" onChange={props.change}></input>
            <label htmlFor="lname">Last Name:</label>
            <input type="text" id="lname" name="lastName" onChange={props.change}></input>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={props.change}></input>
            <label htmlFor="password">Create Password</label>
            <input type="password" id="password" name="password" onChange={props.change}></input>
            <label htmlFor="checkpassword">Retype Password</label>
            <input type="password" id="checkpassword" name="verifyPassword" onChange={props.change}></input>
            <label className="switch"> Email Updates: </label>
                <input type="checkbox" checked="checked" name="boolean" onChange={props.change}></input>
            <button type="submit" className="submit-btn">submit</button>
        </form>
    );
}