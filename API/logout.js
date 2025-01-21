// Imports the `getAuth` and `signOut` functions from the Firebase Authentication module to handle authentication-related tasks.
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Imports the `initializeApp` function from the Firebase App module to initialize a Firebase app instance with a configuration object.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";


// Defines the Firebase configuration object containing the API key and project-specific details required to connect the app to Firebase services.
const firebaseConfig = {
  apiKey: "AIzaSyA4MvrK7a2o-UZ2yIvhzfpEJKtUcIJVF2E",
  authDomain: "food-recipe-e3888.firebaseapp.com",
  projectId: "food-recipe-e3888",
  storageBucket: "food-recipe-e3888.appspot.com",
  messagingSenderId: "479682801897",
  appId: "1:479682801897:web:de37363b938d7bfb800078",
};

// Initializes the Firebase app instance using the configuration object defined earlier.
const app = initializeApp(firebaseConfig);

// Initializes Firebase Authentication and links it to the Firebase app instance for handling authentication operations.
const auth = getAuth(app);

// Retrieves the `userData` from the browser's local storage and parses it from a JSON string to a JavaScript object.
let userData = JSON.parse(localStorage.getItem("userData"));


// Checks if `userData` is null or undefined. If true, alerts the user that no data is found and redirects them to the home page using `redirectToHome`.
if (!userData) {
  alert("No user data found. Please log in again.");
  redirectToHome();
}

// Checks if the `firstName` in `userData` is "Guest". If true, updates the DOM element with the ID `userName` to display "Guest User".
else if (userData.firstName === "Guest") {
  document.getElementById("userName").textContent = "Guest User";
}

// If `userData` exists and the user is not a guest, updates the DOM element with the ID `userName` to display the user's full name.
else {
  document.getElementById("userName").textContent = `${userData.firstName} ${userData.lastName}`;
}

// Gets a reference to the DOM element with the ID `logout-button`, which is expected to be a button for logging out.
const logoutBtn = document.getElementById("logout-button");

// Adds a click event listener to the logout button. If the user is not a guest, signs them out using Firebase Authentication.
logoutBtn.addEventListener("click", async () => {
  try {
    if (userData.firstName !== "Guest") {
      await signOut(auth);
    }

    // Removes the `userData` entry from local storage to clear the user's session data.
    localStorage.removeItem("userData");

    // Redirects the user to the home page after logging out.
    window.location.href = "../index.html";

    // Handles errors during the logout process, logs the error message to the console, and redirects the user to the home page regardless of the error.
  } catch (error) {
    console.error("Error logging out:", error.message);
    window.location.href = "../index.html";
  }
});

// Defines a helper function `redirectToHome` that signs the user out, removes their data from local storage, and redirects them to the home page. Logs any errors encountered during the process.
function redirectToHome() {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("userData");
      localStorage.clear() //clears the objects in localstorage
      window.location.href = "../index.html";
    })
    .catch((error) => {
      console.error("Error redirecting to home:", error.message);
    });
}
