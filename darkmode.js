// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    // Check if dark mode preference is stored in local storage
    if (localStorage.getItem('darkMode') === 'enabled') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  
    // Add an event listener for the dark mode toggle button
    darkModeToggle.addEventListener('click', function() {
      if (localStorage.getItem('darkMode') !== 'enabled') {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    });
  
    // Function to enable dark mode
    function enableDarkMode() {
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
      darkModeToggle.innerText = 'Light Mode';
    }
  
    // Function to disable dark mode
    function disableDarkMode() {
      body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
      darkModeToggle.innerText = 'Dark Mode';
    }
  });
  