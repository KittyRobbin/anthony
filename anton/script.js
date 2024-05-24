document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.querySelector('.progress-bar');
  const actionButton = document.getElementById('action-button');
  
  let width = parseInt(progressBar.style.getPropertyValue('--width'));
  
  const interval = setInterval(() => {
    width += 10;
    progressBar.style.setProperty('--width', width);
    progressBar.setAttribute('data-label', `${width}%`);
    
    if (width >= 100) {
      clearInterval(interval);
      progressBar.setAttribute('data-label', 'Complete!');
      actionButton.style.display = 'block';
    }
  }, 1000);
});
