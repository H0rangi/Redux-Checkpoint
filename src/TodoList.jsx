import React from 'react';
import Todo from './Todo';
import "./list.css"

export default function TodoList({ todos, toggleTodo, editTodo }) {
  return (
    <div className='list'>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} editTodo={editTodo} />
      ))}
    </div>
  );
}
