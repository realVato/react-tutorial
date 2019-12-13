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

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             todos: todosData
//         }
//     }
    
//     render() {
//         const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
        
//         return (
//             <div className="todo-list">
//                 {todoItems}
//             </div>
//         )
//     }
// }

// Handling events

// function handleClick() {
//     console.log("I was clicked")
// }

// // https://reactjs.org/docs/events.html#supported-events

// function App() {
//     return (
//         <div>
//             <img onMouseOver={handleClick} src="https://www.fillmurray.com/200/100"/>
//             <br />
//             <br />
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     )
// }

// Phase 5

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             todos: todosData
//         }
//     }
    
//     render() {
//         const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
        
//         return (
//             <div className="todo-list">
//                 {todoItems}
//             </div>
//         )    
//     }
// }

// set State()

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//         this.halfSum = this.halfSum.bind(this)
//         this.addOne = this.addOne.bind(this)
//         this.doubleSum = this.doubleSum.bind(this)
//     }
    
//     halfSum() {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count / 2
//             }
//         })
//     }
    
//     addOne() {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count + 1
//             }
//         })
//     }
    
//     doubleSum() {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count * 2
//             }
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.halfSum}>Reduce by half!</button>
//                 <button onClick={this.addOne}>Increase by 1!</button>
//                 <button onClick={this.doubleSum}>Double up!</button>
//             </div>
//         )
//     }
// }

// Phase 6

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             todos: todosData
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
    
//      handleChange(id) {
//         this.setState(prevState => {
//             const isUpdated = prevState.todos.map(todo => {
//                 if (todo.id === id) {
//                     return {
//                         ...todo,
//                         completed: !todo.completed
//                     }
//                 }
//                 return todo
//             })
//             return {
//                 todos: isUpdated
//             }
//         })
//     }
    
//     render() {
//         const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
//         handleChange={this.handleChange} />)
        
//         return (
//             <div className="todo-list">
//                 {todoItems}
//             </div>
//         )    
//     }
// }

// Lifecycle methods part 1

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

// class TodoList extends Component {
//     constructor() {
//         super()
//         this.state = {}
//     }
    
//     componentDidMount() {
//         // GET the data I need to correctly display
//     }
    
//     componentWillReceiveProps(nextProps) {
//         if (nextProps.whatever !== this.props.whatever) {
//             // do something important here
//         }
//     }
    
//     shouldComponentUpdate(nextProps, nextState) {
//         // return true if want it to update
//         // return false if not
//     }
    
//     componentWillUnmount() {
//         // teardown or cleanup your code before your component disappears
//         // (E.g. remove event listeners)
//     }
    
//     render() {
//         return (
//             <div>
//                 Code goes here
//             </div>
//         )
//     }
// }


// Lifecycle methods part 2

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class TodoList extends Component {
    constructor() {
        super()
        this.state = {}
    }
    
    static getDerivedStateFromProps(props, state) {
        // return the new, updated state based upon the props
        // https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
        // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    }
    
    getSnapshotBeforeUpdate() {
        // create a backup of the current way things are
        // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    }
    
    // componentWillMount() {
        
    // }
    
    componentDidMount() {
        // GET the data I need to correctly display
    }
    
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.whatever !== this.props.whatever) {
    //         // do something important here
    //     }
    // }
    
    shouldComponentUpdate(nextProps, nextState) {
        // return true if want it to update
        // return false if not
    }
    
    // componentWillUpdate() {
        
    // }
    
    componentWillUnmount() {
        // teardown or cleanup your code before your component disappears
        // (E.g. remove event listeners)
    }
    
    render() {
        return (
            <div>
                Code goes here
            </div>
        )
    }
}

export default App