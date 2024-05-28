import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, toggleTodo, editTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} editTodo={editTodo} />
      ))}
    </div>
  );
}
