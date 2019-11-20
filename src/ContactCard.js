import React from 'react'

const ContactCard = props =>
    <div className='contact-card'>
        <img src = {props.contact.imgUrl} />
        <h1>{props.contact.name}</h1>
        <p>PHONE: {props.contact.phone}</p>
        <p>EMAIL: {props.contact.email}</p>
    </div>

export default ContactCard