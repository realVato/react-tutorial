import React from 'react';

function App() {

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = 'morning'
    } else if (hours > 12 && hours < 17) {
        timeOfDay = 'good afternoon'
    } else {
        timeOfDay = 'good evening'
    }

    return(
        <div>
            <h1>Checkboxes</h1>
            <form className='form'>
                <div>
                    <input type='checkbox' /><span>i have paper</span>
                </div>
                <div>
                    <input type='checkbox' /><span>i have fire</span>
                </div>
                <div>
                    <input type='checkbox' /><span>i have lyrics</span>
                </div>
                <button>{timeOfDay}</button>
            </form>
        </div>
    )
}

export default App;