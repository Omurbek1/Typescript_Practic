import React from "react"
interface ToDoItemProps {
    id: string,
    title: string,
    completed: boolean,
   

}
const ToDoItem = ({ id, title, completed }: ToDoItemProps) => {
    return (
        <li>
            <input type='checkbox' checked={completed} />
            <span>{title}</span>
            <span>&times;</span>
        
        </li>
    )
}

export default ToDoItem