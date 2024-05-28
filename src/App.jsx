import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import { addTodo, toggleTodo, editTodo, clearCompleted, setTodos } from './redux/store';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      dispatch(setTodos(storedTodos));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo() {
    const name = todoNameRef.current.value;
    if (name === '') return;
    dispatch(addTodo({ id: uuidv4(), name, complete: false }));
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    dispatch(clearCompleted());
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={(id) => dispatch(toggleTodo(id))} editTodo={(id, newName) => dispatch(editTodo({ id, newName }))} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed Todos</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
