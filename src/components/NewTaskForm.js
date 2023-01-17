import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
    onTaskFormSubmit({ text, category });
  };
  return (
    <form className="new-task-form" onSubmit={handleSubmit.bind(this)}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={e => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}
export default NewTaskForm;