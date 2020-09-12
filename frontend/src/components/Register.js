import React from 'react';

export default function Register() {
    return (
        <form>
            <label for="fname">First Name:</label>
            <input type="text" id="fname"></input>
            <label for="lname">Last Name:</label>
            <input type="text" id="lname"></input>
            <label for="email">Email:</label>
            <input type="email" id="email"></input>
            <label for="password">Create Password</label>
            <input type="password" id="password"></input>
            <label for="checkpassword">Retype Password</label>
            <input type="password" id="checkpassword"></input>
            <label class="switch"> Email Updates:
                <input type="checkbox"></input>
                <span class="slider round"></span>
            </label>
        </form>
    );
}