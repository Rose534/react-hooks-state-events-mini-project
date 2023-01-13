import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  
  return (
  <div className="App">
  <h2>My tasks</h2>
  <CategoryFilter />
  <NewTaskForm />
  <TaskList tasks={tasks} onDelete={handleDelete} />
  </div>
  );

  function handleDelete(id) {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }
  }
  
  export default App;
