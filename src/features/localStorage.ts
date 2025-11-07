import { todos } from './addTodo';
import { renderTodos } from './renderTodos';
import { updateProgressBar } from './progressBar';

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

  // Load background color too
  const savedColor = localStorage.getItem('backgroundColor');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;

    // Set the color picker to match saved color
    const colorPicker = document.getElementById('colorPicker') as HTMLInputElement | null;
    if (colorPicker) colorPicker.value = savedColor;
  }
};

// Clear all todos from local storage
export const clearLocalStorage = (): void => {
  localStorage.removeItem('todos');
  todos.length = 0; // Clear the in-memory array
  renderTodos();
  updateProgressBar();
};