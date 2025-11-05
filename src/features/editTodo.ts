import { todos } from './addTodo';
import { renderTodos } from './renderTodos';

export const editTodo = (id: number): void => {
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    const text = prompt('Edit todo', todo.text);
    if (text && text.trim() !== '') {
      todo.text = text.trim();
      renderTodos();
    }
  }
};