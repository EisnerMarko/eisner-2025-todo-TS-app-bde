import { todos } from './addTodo';
import { renderTodos } from './renderTodos';

export const removeTodo = (id: number): void => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    renderTodos();
  }
};