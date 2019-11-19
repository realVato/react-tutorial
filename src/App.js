import React from 'react'

function App() {

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        fontSize: 48
    }
    const buttonStyle = {
        borderRadius: 5
    }

    if (hours < 12) {
        timeOfDay = 'morning'
        styles.color = 'yellow'
        buttonStyle.borderColor = 'yellow'
    } else if (hours > 12 && hours < 17) {
        timeOfDay = 'good afternoon'
        styles.color = 'red'
        buttonStyle.borderColor = 'red'
    } else {
        timeOfDay = 'good evening'
        styles.color = 'blue'
        buttonStyle.borderColor = 'blue'
    }

    return (
        <div>
            <h1 style={styles}>Checkboxes</h1>
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
                <button style={buttonStyle}>{timeOfDay}</button>
            </form>
        </div>
    )
}

export default App