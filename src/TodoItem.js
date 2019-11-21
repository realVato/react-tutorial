import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.todoList.completed}/>
            <p>{props.todoList.text}</p>
        </div>
    )
}

export default TodoItem