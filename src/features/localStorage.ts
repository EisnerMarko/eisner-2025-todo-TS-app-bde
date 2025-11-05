import { todos } from './addTodo';
import { renderTodos } from './renderTodos';

// Save todos to local storage
export const saveTodosToLocalStorage = (): void => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Load todos from local storage
export const loadTodosFromLocalStorage = (): void => {
  const storedTodos = localStorage.getItem('todos');
  if (storedTodos) {
    const parsedTodos = JSON.parse(storedTodos);
    todos.push(...parsedTodos); // Add them to the existing todos array
  }
};

// Clear all todos from local storage
export const clearLocalStorage = (): void => {
  localStorage.removeItem('todos');
  todos.length = 0; // Clear the in-memory array
  renderTodos();
};