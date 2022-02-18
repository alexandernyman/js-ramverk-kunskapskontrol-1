import React from "react";
import Todo from "../components/Todo";

const Todolist = ({ todo, setTodo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todo.map((todos) => (
          <Todo setTodo={setTodo} todo={todo} key={todos.id} todos={todos} text={todos.text} />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
