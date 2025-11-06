import { removeTodo } from './removeTodo';
import { editTodo } from './editTodo';
import { toggleCompleted } from './toggleComplete';
import { todos } from './addTodo';

// Define the Todo interface: This interface defines the structure of a todo item.
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const todoList = document.getElementById('todo-list') as HTMLUListElement;

// Function to render the list of todos: This function updates the DOM to display the current list of todos.
export const renderTodos = (): void => { // void because no return - what we are doing is updating the DOM
  // Clear the current list
  todoList.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = 'todo-item';

    if (todo.completed) {
        li.classList.add('completed');
    }

    li.innerHTML = `
      <span>${todo.text}</span>
      <button class="complete-btn">${todo.completed ? 'Undo' : 'Complete'}</button>
      <button class="remove-btn">Remove</button>
      <button class="edit-btn">Edit</button>
    `;

    li.querySelector('.remove-btn')?.addEventListener('click', () => removeTodo(todo.id));
    li.querySelector('.edit-btn')?.addEventListener('click', () => editTodo(todo.id));
    li.querySelector('.complete-btn')?.addEventListener('click', () => toggleCompleted(todo.id));

    todoList.appendChild(li);
  });
};
