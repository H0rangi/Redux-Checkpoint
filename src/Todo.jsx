import React, { useState } from 'react';

export default function Todo({ todo, toggleTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(todo.name);

  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleNameChange(e) {
    setNewName(e.target.value);
  }

  function handleSaveClick() {
    editTodo(todo.id, newName);
    setIsEditing(false);
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
      </label>
      {isEditing ? (
        <>
          <input type="text" value={newName} onChange={handleNameChange} />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          {todo.name}
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
}
