import React from 'react';
import UserHeader from './UserHeader';

export default function UserPage(props) {
    return (
        <UserHeader
            fname={props.fname} />
    );
}