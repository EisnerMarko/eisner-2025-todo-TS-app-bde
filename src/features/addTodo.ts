import { Todo } from './renderTodos';
import { renderTodos } from './renderTodos';

// Initialize an empty array: This array will store the list of todos.
export let todos: Todo[] = [];

export const addTodo = (text: string): void => {
  const newTodo: Todo = {
    id: Date.now(),
    text: text,
    completed: false,
  };
  todos.push(newTodo);
  console.log("Todo added:", todos);
  renderTodos();
};