import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MyInfo() {
    return (
        <div>
            <h1>Tomy G</h1>
            <p>most charismatic guy in the universe</p>
            <ul>
                <li>1</li>
                <li>2</li>  
                <li>3</li>
            </ul>  
        </div>
    )
}

ReactDOM.render(
    <MyInfo />,
    document.getElementById('root')
    );
