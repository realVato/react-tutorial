import React from 'react'

const ContactCard = props => 
    <div className='contact-card'>
        <img src = {props.imgUrl} />
        <h1>{props.name}</h1>
        <p>PHONE: {props.phone}</p>
        <p>EMAIL: {props.email}</p>
    </div>

export default ContactCard