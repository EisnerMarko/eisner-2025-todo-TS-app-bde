import { describe, it, expect, beforeEach } from 'vitest';
import { addTodo, todos } from './features/addTodo';
import { removeTodo } from './features/removeTodo';
import { toggleCompleted } from './features/toggleComplete';
import { sortTodosByStatus } from './features/sortTodos';

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

  it('sorts todos by completed status', () => {
    addTodo('Todo 1');
    addTodo('Todo 2');
    addTodo('Todo 3');

    // Toggle some to completed
    toggleCompleted(todos[0].id);
    toggleCompleted(todos[2].id);

    // Current order: completed, incomplete, completed
    expect(todos.map(t => t.completed)).toEqual([true, false, true]);

    sortTodosByStatus(); // sort incomplete first

    // After sorting: incomplete todos first
    expect(todos.map(t => t.completed)).toEqual([false, true, true]);
  });
});
