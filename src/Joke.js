import React from 'react'

const Joke = (props) => 
    <div className='aJoke'>
        <h3>{props.question} {props.answer}</h3>
    </div>



export default Joke