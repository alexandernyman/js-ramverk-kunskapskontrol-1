import React from "react";

const Todo = ({text, todos, todo, setTodo}) => {

    const deleteHandler = () => {
        setTodo(todo.filter(ele => ele.id !== todos.id))
    };
    const completeHandler = () => {
        setTodo(todo.map(item => {
            if(item.id === todos.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }


    return(
        <div className="todo-items">
            <li className={`todo-item ${todos.completed ? "completed" : ""}`}>{text}</li>
            <button className="todo-buttons" onClick={completeHandler}>✅</button>
            <button className="todo-buttons" onClick={deleteHandler}>🗑️</button>
        </div>
    );
}


export default Todo;