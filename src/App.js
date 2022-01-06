import React, {useState, useEffect} from "react";
import './App.css';
//Importing Components
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  //RUN ONCE when the app starts
  useEffect(() => {
    console.log("useEffect getLocalTodos");
    getLocalTodos();
  },[]);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])

  const filterHandler = () => {
    //console.log('hey');
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
      }
  }

  //Save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    console.log(localStorage.getItem("todos"));
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus = {setStatus}
        />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
