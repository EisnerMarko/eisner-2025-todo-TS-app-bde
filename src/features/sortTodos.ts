import { todos } from './addTodo';
import { renderTodos } from './renderTodos';
import { saveTodosToLocalStorage } from './localStorage';

// Sort todos by completed status: incomplete first, completed last
export const sortTodosByStatus = (): void => {
  todos.sort((a, b) => Number(a.completed) - Number(b.completed)); // false (0) comes before true (1)
  renderTodos();
  saveTodosToLocalStorage();
};