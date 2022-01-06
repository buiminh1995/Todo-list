import React from "react";

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => { //or (props)
  const inputTextHandler = (e) => {
    //console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault(); //so that web won't reload when button clicked
    setTodos([
      ...todos,
      {completed: false, id: Math.random() * 1000, text: inputText}
    ])
    //reset the state to empty string because already
    //add string to todos list
    setInputText('');
  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }
  return (
  <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        />
      {/*value={inputText} so that the input box changes accordingly to state inputText*/}
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
  </form>
);
};

export default Form;
