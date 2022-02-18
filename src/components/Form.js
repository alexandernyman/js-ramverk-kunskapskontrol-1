import React from "react";

const Form = ({ setInputText, setTodo, todo, inputText }) => {
  const inputTextHandler = (event) => {
    console.log(event.target.value);
    setInputText(event.target.value);
  };
  const submitTodoHandler = (event) => {
    event.preventDefault();
    setTodo([
      ...todo,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="form-field"/>
      <button onClick={submitTodoHandler} type="submit" className="form-button">
        Add
      </button>
    </form>
  );
};

export default Form;


