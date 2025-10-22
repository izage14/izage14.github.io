// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

  // Get references to the HTML elements
  const nameInput = document.getElementById('nameInput');
  const greetButton = document.getElementById('greetButton');
  const greetingMessage = document.getElementById('greetingMessage');

  // Function to display the greeting
  const showGreeting = () => {
      // Get the name from the input box and remove extra spaces
      const name = nameInput.value.trim();

      // Check if a name was entered
      if (name) {
          // If yes, display a personalized greeting
          greetingMessage.textContent = `Hi, ${name}!`;
      } else {
          // If no, prompt the user to enter a name
          greetingMessage.textContent = 'Please enter a name.';
      }
  };

  // Add a click event listener to the button
  greetButton.addEventListener('click', showGreeting);

  // Add a keypress event listener to the input field
  // This allows the user to press 'Enter' to greet
  nameInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          showGreeting();
      }
  });

});