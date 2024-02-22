import React, {useState} from "react";

export default function TodoForm({addTodo}) {
    const [value, setValue] = useState('')

    function handleChange(event) {
        setValue(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (value) {
            addTodo(value);
            setValue('');
        }
    }

    return (
        <form className="todoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" placeholder="What is the task today?" onChange={handleChange} />
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}