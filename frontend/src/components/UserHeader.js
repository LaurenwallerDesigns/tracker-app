import React from 'react';

export default function UserHeader(props) {
    return (
        <h2 className="user-header">Welcome, {props.fname}!</h2>
    );
}