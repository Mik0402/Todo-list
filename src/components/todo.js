import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Todo({task}) {
    return (
        <div className="todo">
            <p>{task.task}</p>
            <div>
             <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} />
             <FontAwesomeIcon className="delete-icon" icon={faTrash} />
            </div>
        </div>
    )
}