import { configureStore, createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: JSON.parse(localStorage.getItem('todoApp.todos')) || [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.complete = !todo.complete;
      }
    },
    editTodo: (state, action) => {
      const { id, newName } = action.payload;
      const todo = state.find(todo => todo.id === id);
      if (todo) {
        todo.name = newName;
      }
    },
    clearCompleted: (state) => {
      return state.filter(todo => !todo.complete);
    },
    setTodos: (state, action) => {
      return action.payload;
    }
  }
});

export const { addTodo, toggleTodo, editTodo, clearCompleted, setTodos } = todosSlice.actions;

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  }
});

export default store;
