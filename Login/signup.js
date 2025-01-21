// Selecting the DOM elements by their respective IDs
let password = document.getElementById("password");  // Select the password input field using its ID
let checkbox = document.getElementById("checkbox");  // Select the checkbox element that toggles visibility
let showPassword = document.getElementById("getPassword");  // Select the text element that shows "Show Password" or "Hide Password"

// Adding an event listener to the checkbox that listens for changes
checkbox.addEventListener("change", function () {
  // If the checkbox is checked, change the password input type to 'text' to show the password
  if (checkbox.checked) {
    password.type = "text";  // This makes the password visible by setting the input field type to text
    showPassword.textContent = "Hide Password";  // Change the text to "Hide Password" when the checkbox is checked
  } else {
    // If the checkbox is unchecked, revert the password input type to 'password' to hide the password
    password.type = "password";  // This hides the password by setting the input field type back to password
    showPassword.textContent = "Show Password";  // Change the text to "Show Password" when the checkbox is unchecked
  }
});
