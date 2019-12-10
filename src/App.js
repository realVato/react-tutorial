import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

// function App(props) {
    
//     return (
//         <div>
//            <h1>{props.whatever}</h1>
//         </div>
//     )
// }

// CLASS

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Header username="CJ"/>
//                 <Greeting />
//             </div>
//         )
//     }
//  }

//  class Header extends React.Component {
//     render(props) {
//         return (
//             <header>
//                 <p>Welcome, {this.props.username}!</p>
//             </header>
//         )
//     }
//  }

//  class Greeting extends React.Component {
//      render() {
//         const date = new Date()
//         const hours = date.getHours()
//         let timeOfDay

//         if(hours < 12) {
//             timeOfDay = 'morning'
//         } else if (hours >= 12 && hours < 17) {
//             timeOfDay = 'afternoon'
//         } else {
//             timeOfDay = 'night'
//         }
//         return (
//             <h1>Good {timeOfDay} to you, sir or madam!</h1>
//         )
//     }
// }


// STATE

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             answer: "Yes"
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>Is state important to know? {this.state.answer}</h1>
//                 <ChildComponent answer={this.state.answer}/>
//             </div>
//         )
//     }
// }

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             name: 'Tommy G',
//             age: 20
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <h3>{this.state.age} years old</h3>
//             </div>
//         )    
//     }
// }

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             isLoggedIn: true
//         }
//     }
//         render() {
//             return (
//                 <div>
//                     <h1>You are currently logged {this.state.isLoggedIn ? 'in' : 'out'}</h1>
//                 </div>
//             )
//         }
// }

// Phase 4

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default App