import React, { useState } from "react";
import { v4 } from "uuid";
import "../../index.css";
import "./Search.css";
import Button from "../Buttons/Button";

function Search({ tasks, setTasks }) {
  const [taskName, setTaskName] = useState("");

  function handleAddTask() {
    if (taskName.trim()) {
      setTasks([...tasks, { id: v4(), name: taskName, isSelected: false }]);
      setTaskName("");
    }
  }

  return (
    <div className="search">
      <input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        type="text"
        placeholder="What do you need to do?"
        className="text-input"
      />
      <Button tasks={tasks} setTasks={setTasks} handleAddTask={handleAddTask} />
    </div>
  );
}

export default Search;
