import React from 'react'; 
import "./css/user.css"

export const User = ({name, email, phone}) => {
    return (
        <div className='user'>
            <h2>Name: {name}, Email: {email}</h2>
            <h2>{phone}</h2>
        </div>
    )
}