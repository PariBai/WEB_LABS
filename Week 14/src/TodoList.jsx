import React, { useState } from "react";
import "./todo.css";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskType, setTaskType] = useState("Todo");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTaskName, setEditedTaskName] = useState("");
  const [editedTaskType, setEditedTaskType] = useState("");
  const [activeStatus, setActiveStatus] = useState({});

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { name: task, type: taskType, id: Date.now() },
      ]);
      setTask("");
    }
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          name: editedTaskName || task.name,
          type: editedTaskType || task.type,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditTaskId(null);
    setEditedTaskName("");
    setEditedTaskType("");
  };
  
  const handleStatusChange = (taskId, status) => {
    setActiveStatus((prevStatus) => ({
      ...prevStatus,
      [taskId]: status,
    }));
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          type: status,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <><div className="container">
      <h1>TODO List </h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task name" />
      <select value={taskType} onChange={(e) => setTaskType(e.target.value)}>
        <option value="Todo">Todo</option>
        <option value="Complete">Complete</option>
        <option value="In Progress">In Progress</option>
      </select>
      <button onClick={addTask}>Add Task</button>
      <hr />
    </div><div className="MyContainer">
        {tasks.map((taskItem) => (
          <div key={taskItem.id}>
            {editTaskId === taskItem.id ? (
              <>
                <input
                  type="text"
                  value={editedTaskName || taskItem.name}
                  onChange={(e) => setEditedTaskName(e.target.value)}
                  placeholder="Enter edited task name" />
                <select
                  value={editedTaskType || taskItem.type}
                  onChange={(e) => setEditedTaskType(e.target.value)}
                >
                  <option value="Todo">Todo</option>
                  <option value="Complete">Complete</option>
                  <option value="In Progress">In Progress</option>
                </select>
                <button onClick={() => editTask(taskItem.id)}>Save</button>
              </>
            ) : (
              <>
                <div> Task : {taskItem.name}</div>
                <div>
                  Status : {taskItem.type}
                  <button
                    style={{
                      backgroundColor: taskItem.type === "Todo" ? "green" : "",
                    }}
                    onClick={() => handleStatusChange(taskItem.id, "Todo")}
                  >
                    Todo
                  </button>
                  <button
                    style={{
                      backgroundColor: taskItem.type === "Complete" ? "green" : "",
                    }}
                    onClick={() => handleStatusChange(taskItem.id, "Complete")}
                  >
                    Complete
                  </button>
                  <button
                    style={{
                      backgroundColor: taskItem.type === "In Progress" ? "green" : "",
                    }}
                    onClick={() => handleStatusChange(taskItem.id, "In Progress")}
                  >
                    In Progress
                  </button>
                </div>
                <button onClick={() => setEditTaskId(taskItem.id)}>Edit</button>
                <button onClick={() => removeTask(taskItem.id)}>Remove</button>
                <hr />
              </>
            )}
          </div>
        ))}
      </div></>
    
  );
  
}
