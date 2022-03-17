import logo from './logo.svg';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {useState} from "react";

const todosInit= [
  {title: "aTitle", comment: 'aComment'},
  {title: "aTitle2", comment: 'aComment2'},
]

function App() {

  const [todos, setTodos] = useState(todosInit)

  return (
    <div className="App">
      <h1>Ma todolist 🦋</h1>
        <TodoForm todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} />
    </div>
  );
}

export default App;
