import React, {useState} from "react";

export default function EditTodoForm({task, editTodo}) {
    const [value, setValue] = useState(task.task);

    function handleChange(event) {
        setValue(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
            editTodo(value, task.id);
       
    };

    return (
        <form className="todoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value} placeholder="Update Task" onChange={handleChange} />
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    )
}