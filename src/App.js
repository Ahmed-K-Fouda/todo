import React, { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Search from "./components/searchbar/Search";
import Todo from "./components/todolist/Todo";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="container">
      <Header />
      <Nav />
      <Search tasks={tasks} setTasks={setTasks} />
      <Todo tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
