import { todos } from './addTodo';
import { renderTodos } from './renderTodos';

export const toggleCompleted = (id: number): void => {
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    renderTodos();
  }
};