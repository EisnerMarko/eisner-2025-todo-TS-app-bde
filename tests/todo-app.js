import { Selector, ClientFunction } from "testcafe";

fixture("Todo App Persistence Test")
    .page("https://markosdesign.com/eisner-2025-todo-TS-app-bde-main/");

// reload the page
const reloadPage = ClientFunction(() => location.reload(true));

// get localStorage todos
const getTodosFromLocalStorage = ClientFunction(() => {
    return JSON.parse(localStorage.getItem('todos') || '[]');
});

test("Todo items persist after reload", async t => {
    const todoInput = Selector('#todo-input');
    const addButton = Selector('button[type="submit"]');
    const todoList = Selector('#todo-list li');

    // Add a todo
    await t
        .typeText(todoInput, 'TestCafe persistence check')
        .click(addButton)
        .expect(todoList.withText('TestCafe persistence check').exists)
        .ok('Todo item should appear in the list');

    // Check localStorage saved the todo
    const storedTodos = await getTodosFromLocalStorage();
    await t.expect(storedTodos.length).gt(0, 'localStorage should contain todos');

    // Reload the page
    await reloadPage();

    // Verify the todo still appears
    await t
        .expect(todoList.withText('TestCafe persistence check').exists)
        .ok('Todo item should still be visible after reload');
});