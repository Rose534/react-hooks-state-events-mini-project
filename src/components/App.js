import React, { useState } from 'react';
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import Task from './Task';

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState(TASKS);
  const [tasks, setTasks] = useState(TASKS);
  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredTasks(TASKS);
    } else {
      setFilteredTasks(TASKS.filter((task) => task.category === category));
    }
  };
  
  const handleDeleteTask = (id) => {
    setFilteredTasks(filteredTasks.filter((task) => task.id !== id));
    setTasks(tasks.filter((task) => task.id !== id));
  }
  
  const handleTaskFormSubmit = (formData) => {
    const newTask = {
      id: tasks.length + 1, 
      text: formData.text,
      category: formData.category,
    };
    setTasks([...tasks, newTask]);
    setFilteredTasks([...filteredTasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
          categories={CATEGORIES}
          selectedCategory={selectedCategory} 
          onCategoryClick={handleCategoryClick} 
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
