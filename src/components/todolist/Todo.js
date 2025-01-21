import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "./Todo.css";
import "../../index.css";
import Items from "../items/Items";
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";

function Todo({ tasks, setTasks }) {
  const [updateTaskId, setUpdateTaskId] = useState(null);
  function handleSelect(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isSelected: !task.isSelected } : task
      )
    );
  }

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.success("Task deleted successfully!😉");
  }

  function handleShowInputsUpdate(id) {
    setUpdateTaskId(id);
  }

  function handleUpdate(id, updatedName) {
    if (updatedName.trim()) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, name: updatedName } : task
        )
      );
      toast.success("Task Updated Successfully🎉");
    } else {
      toast.error("Task Shouldn't Be Empty😞");
      return;
    }
    setUpdateTaskId(null);
  }

  function handleClearCompleted() {
    setTasks(tasks.filter((task) => !task.isSelected));
    toast.success("All Completed Task Successfully Deleted🥶");
  }

  const hasCompletedTask = tasks.some((task) => task.isSelected);
  return (
    <div className="todo">
      {tasks?.map((item) => (
        <Items
          key={item.id}
          item={item}
          handleSelect={handleSelect}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          handleShowInputsUpdate={handleShowInputsUpdate}
          isUpdating={updateTaskId === item.id}
        />
      ))}
      {hasCompletedTask && (
        <div className="clear" onClick={handleClearCompleted}>
          <MdOutlineSystemSecurityUpdateGood />
          Clear Completed
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Todo;
