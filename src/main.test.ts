import { describe, it, expect, beforeEach } from 'vitest';
import { addTodo, todos } from './features/addTodo';
import { removeTodo } from './features/removeTodo';
import { toggleCompleted } from './features/toggleComplete';

describe('Todo App Basic Functions', () => {
  beforeEach(() => {
    todos.length = 0; // reset array before each test
  });

  it('adds a new todo', () => {
    addTodo('Test Todo');
    expect(todos.length).toBe(1);
    expect(todos[0].text).toBe('Test Todo');
  });

  it('toggles todo completion', () => {
    addTodo('Complete Me');
    toggleCompleted(todos[0].id);
    expect(todos[0].completed).toBe(true);
  });

  it('removes a todo', () => {
    addTodo('Delete Me');
    removeTodo(todos[0].id);
    expect(todos.length).toBe(0);
  });
});
