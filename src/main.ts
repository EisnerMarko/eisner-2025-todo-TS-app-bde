/**
 * NOTE to self
 * Make a module and import the functions from the module
 * Seperate the functions into different files
 * Logical grouping of functions - for example, all functions related to adding a todo item can be in one file
 * 
 */



// Imports
import './style.css';
import { addTodo } from './features/addTodo';
import { removeTodo } from './features/removeTodo';
import { toggleCompleted } from './features/toggleComplete';
import { editTodo } from './features/editTodo';
import { renderTodos } from './features/renderTodos';
import { initializeColorPicker } from './features/colorPicker';


// Get references to the HTML elements: These references will be used to interact with the DOM
const todoInput = document.getElementById('todo-input') as HTMLInputElement; // exist in HTML file
const todoForm = document.querySelector('.todo-form') as HTMLFormElement;    // exist in HTML file
const errorMessage = document.getElementById('error-message') as HTMLParagraphElement;

todoForm.addEventListener('submit', (event: Event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  const text = todoInput.value.trim(); // Get the value of the input field and remove any leading or trailing whitespace

  if (text !== '') { // Check if the input field is empty
    todoInput.classList.remove('input-error'); // Remove the error highlight if present
    errorMessage.style.display = 'none'; // Hide the error message
    addTodo(text); // Add the todo item
    todoInput.value = ''; // Clear the input field
  } else {
    console.log("Please enter a todo item"); // Provide feedback to the user
    todoInput.classList.add('input-error'); // Add a class to highlight the error
    errorMessage.style.display = 'block'; // Show the error message
  }
});

// Initial render
renderTodos();
// The initial render is important to display the list of todos when the page is first loaded. Without it, the list would be empty until a new todo is added.
// Move it when code is complete ( refactoring ) 

todoForm.addEventListener('submit', (event: Event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  const text = todoInput.value.trim(); // Get the value of the input field and remove any leading or trailing whitespace - not needed, but good practice
  if (text !== '') { // Check if the input field is not empty. Sort of a reverse falsey
    addTodo(text);
    todoInput.value = ''; // Clear the input field
  }
});

// --- Event Delegation (Clean way to handle buttons dynamically) ---
document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;

  // Remove Todo
  if (target.classList.contains('remove-btn')) {
    const id = Number(target.dataset.id);
    removeTodo(id);
  }

  // Toggle Complete
  if (target.classList.contains('complete-btn')) {
    const id = Number(target.dataset.id);
    toggleCompleted(id);
  }

  // Edit Todo
  if (target.classList.contains('edit-btn')) {
    const id = Number(target.dataset.id);
    editTodo(id);
  }
});

// Call the initializeColorPicker function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeColorPicker();
});

/** 
 * Kristian: 6th of September 2024, BDE
 * 
 * This is the list of optional features that can be added to the todo list application:
 * You must make at least one of these features to complete the project. The more the merrier.
 * In your submission video, please mention which feature you have implemented and demonstrate how it works. Go through the code and explain how you implemented the feature and how it works.
 * IF, you want to implement something not on list, you can do that as well.
*/


//Optional features list: 

// Option 1: Add a button to toggle the completed status of a todo item
// Function to toggle the completed status of a todo + 
// Add a button to toggle the completed status of a todo item

// Option 2: Add a button to clear all completed todos
// Add a button to clear all completed todos
// Function to clear all completed todos
// Add a button to toggle all todos

// Option 3: Add a button to toggle all todos
// Edit a todo item and update it
// Add an input field to edit a todo item
// Save the updated todo item
// Cancel the editing of a todo item
// Add a button to cancel the editing of a todo item

// Option 4: Add a button to filter todos by status
// Add a button to filter todos by status
// Function to filter todos by status

// Option 5: Add a button to sort todos by status
// Add a button to sort todos by status
// Function to sort todos by status

// Option 6: Due Date for Todos:
// Add a date input field to set a due date for each todo item.
// Display the due date next to each todo item.
// Highlight overdue todos.
// Priority Levels:

// Option 7: Add a dropdown to set the priority level (e.g., Low, Medium, High) for each todo item.
// Display the priority level next to each todo item.
// Sort todos by priority.
// Search Functionality:

// Option 8: Add a search input field to filter todos based on the search query.
// Display only the todos that match the search query.
// Category Tags:

// Option 9: Add a text input field to assign category tags to each todo item.
// Display the tags next to each todo item.
// Filter todos by category tags.
// Progress Indicator:

// Option 10: Add a progress bar to show the percentage of completed todos.
// Update the progress bar as todos are marked as completed or incomplete.
// Dark Mode Toggle:

// Option 11: Add a button to toggle between light and dark modes.
// Change the app's theme based on the selected mode.
// Export/Import Todos:

// Option 12: Add buttons to export the list of todos to a JSON file.
// Add functionality to import todos from a JSON file.
// Notifications:

// Option 13: Add notifications to remind users of due todos.
// Use the Notification API to show browser notifications.

// Option 14: Local Storage:
// Save the list of todos to local storage.
// Retrieve the todos from local storage on page load.
// Add a button to clear all todos from local storage.

// Option 15: JSDOC Comments:
// Add JSDoc comments to document the functions and interfaces in the code.
// Link : https://jsdoc.app/

// Optional 16: Handle Errors:
// Add error handling for user input validation. Show red text or border for invalid input.
// Display error messages for invalid input.

