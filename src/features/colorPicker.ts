export const initializeColorPicker = (): void => {
  const colorPicker = document.getElementById('colorPicker') as HTMLInputElement;
  if (!colorPicker) return;

  // Load saved color on startup
  const savedColor = localStorage.getItem('backgroundColor');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }

  // Save new color on input change
  colorPicker.addEventListener('input', (event: Event) => {
    const target = event.target as HTMLInputElement;
    const newColor = target.value;

    document.body.style.backgroundColor = newColor;
    localStorage.setItem('backgroundColor', newColor);
  });
};