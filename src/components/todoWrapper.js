import React, {useState} from "react";
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from "uuid";

export default function TodoWrapper() {
    const [todos, setTodos] = useState([])
    function addTodo(todos) {
        setTodos([...todos, {id: uuidv4(), task: todos, completed: false, isEditing: false}])
        console.log(todos);
    }
    return (
        <div className="todoWrapper">
            <TodoForm addTodo={addTodo} />
        </div>
    )
}