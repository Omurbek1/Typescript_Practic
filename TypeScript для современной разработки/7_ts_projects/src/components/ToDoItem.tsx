import React from "react"
import { ToDo} from './types';

interface ToDoItemProps extends ToDo {
    style?:React.CSSProperties
}
const ToDoItem = ({ id, title, completed ,style={}}: ToDoItemProps) => {
    return (
        <li style={{color:'red',...style}}>
            <input type='checkbox' checked={completed} />
            <span>{title}</span>
            <span>&times;</span>
        
        </li>
    )
}

export default ToDoItem