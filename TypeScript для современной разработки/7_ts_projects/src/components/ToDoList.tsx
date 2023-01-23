import ToDoItem from "./ToDoItem";
import { ToDo } from "./types";

interface ToDoLIstProps {
    list: ToDo[]
}

const ToDoList = ({ list }: ToDoLIstProps) => {
    return (
        <li>{list.map((todo) => (
            <ToDoItem key={todo.id} {...todo} />
        ))}</li>

    )
}

export default ToDoList