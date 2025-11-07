import { todos } from './addTodo';

const progressBar = document.getElementById('todo-progress') as HTMLProgressElement | null;
const progressText = document.getElementById('progress-percentage') as HTMLElement | null;

export const updateProgressBar = (): void => {
  if (!progressBar || !progressText) return;

  const total = todos.length;
  if (total === 0) {
    progressBar.value = 0;
    progressText.textContent = '0%';
    return;
  }

  const completed = todos.filter(todo => todo.completed).length;
  const percent = Math.round((completed / total) * 100);

  progressBar.value = percent;
  progressText.textContent = `${percent}%`;
};