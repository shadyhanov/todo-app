import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";

const Header = styled.div`
  background-color: green;
  width: 70%;
  height: 80px;
  font-size: 25px;
  margin-left: 15%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <Header>
        <h1>TODO LIST</h1>
      </Header>
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
