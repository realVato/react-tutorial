import React from 'react'

import Joke from './Joke'
import jokeData from './jokeData'

const App = () => {
    const jokeComponents = jokeData.map(joke => <Joke key={joke.id} question={joke.question} answer={joke.answer} />)

    return (
        <div>
            {jokeComponents}
        </div>
    )
}

export default App