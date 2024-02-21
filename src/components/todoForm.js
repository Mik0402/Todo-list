import React from "react";

export default function todoForm() {
    return (
        <form className="todoForm">
            <input type="text" className="todo-input" placeholder="What is the task today?" />
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}