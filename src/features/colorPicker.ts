export const initializeColorPicker = (): void => {
  const colorPicker = document.getElementById('colorPicker') as HTMLInputElement;
  if (!colorPicker) return;

  colorPicker.addEventListener('input', (event: Event) => {
    const target = event.target as HTMLInputElement;
    document.body.style.backgroundColor = target.value;
  });
};