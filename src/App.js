import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>To-do list a lá Alexander Nyman</h1>
      </header>

      <Form
        inputText={inputText}
        todo={todo}
        setTodo={setTodo}
        setInputText={setInputText}
      />

      <Todolist setTodo={setTodo} todo={todo} />
    </div>
  );
}

export default App;
