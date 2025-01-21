// Select all images in the slider container
const images = document.querySelectorAll(".slider-container img");

// Select all radio buttons used for slider navigation
const radioButtons = document.querySelectorAll(".radio-buttons input");

// Select the navigation bar for styling changes on scroll
const navbar = document.querySelector(".navbar");

// Initialize the current slide index to 0
let currentIndex = 0;

// Select the login and signup buttons by their IDs
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

// Add a click event listener to the login button
loginBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default button behavior (e.g., form submission)
  window.location.href = "./Login/login.html"; // Redirect to the login page
});

// Add a click event listener to the signup button
signupBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default button behavior
  window.location.href = "./Login/signup.html"; // Redirect to the signup page
});

// Function to change the active slide
function changeSlide(index) {
  // Iterate through all images and toggle the "active" class based on the current index
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index); // Set the current slide as active
  });

  // Update the radio button's checked state based on the current index
  radioButtons.forEach((radio, i) => {
    radio.checked = i === index; // Match the radio button with the current slide
  });

  // Update the current index
  currentIndex = index;
}

// Function to automatically switch to the next slide
function autoSlide() {
  const nextIndex = (currentIndex + 1) % images.length; // Calculate the next slide index
  changeSlide(nextIndex); // Change to the next slide
}

// Add click event listeners to each radio button for manual slide navigation
radioButtons.forEach((radio, index) => {
  radio.addEventListener("click", () => changeSlide(index)); // Navigate to the selected slide
});

// Automatically change slides every 5 seconds
setInterval(autoSlide, 5000);

// Select the navigation logo by its ID
let logo = document.getElementById("navLogo");

// Add a scroll event listener to change the navbar's background and logo
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled"); // Add a class for the scrolled navbar style
    logo.src = "./images/logoblack.png"; // Change the logo to a black version
  } else {
    navbar.classList.remove("scrolled"); // Revert to the default navbar style
    logo.src = "./images/logo2.png"; // Change the logo back to the default version
  }
});

// Add a click event listener to the "Learn More" button
let learnMore = document.getElementById("learnMore");
learnMore.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default button behavior
  window.location.href = "./Login/signup.html"; // Redirect to the signup page
});

// Add a click event listener to the "More About Us" button
let moreAboutUs=document.getElementById("moreAboutUs");
moreAboutUs.addEventListener("click",(e)=>{
  e.preventDefault(); // Prevent default button behavior
  window.location.href="./Login/signup.html"; // Redirect to the signup page
})

// Add animation to menu cards when they appear in the viewport
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.card'); // Select all menu cards

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate'); // Add animation class when visible
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the card is visible
  );

  cards.forEach((card) => observer.observe(card)); // Observe each card
});

// Animate elements in the "About" section
document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".visit", {
    duration: 1.5, // Animation duration in seconds
    x: "-100%", // Start off-screen to the left
    opacity: 0, // Start with 0 opacity
    ease: "power2.out", // Smooth easing effect
  });

  gsap.from(".visit2", {
    duration: 1.5,
    x: "100%", // Start off-screen to the right
    opacity: 0,
    ease: "power2.out",
    delay: 0.3, // Slight delay for a staggered effect
  });
});

// Add animations to customer review section and stats cards
document.addEventListener("DOMContentLoaded", function () {
  gsap.from("#card1-content", {
    duration: 1.5,
    x: "-100%", // Slide in from the left
    opacity: 0,
    ease: "power2.out",
  });

  gsap.from(".card11", {
    duration: 1.5,
    x: "100%", // Slide in from the right
    opacity: 0,
    ease: "power2.out",
    delay: 0.3,
  });

  gsap.from(".card1", {
    duration: 1,
    y: 50, // Slide in from below
    opacity: 0,
    ease: "power2.out",
    delay: 0.5,
    stagger: 0.2, // Animate one after another
  });
});

// Animate the counters in the stats section when they become visible
document.addEventListener("DOMContentLoaded", () => {
  const moreSection = document.getElementById("more"); // Select the stats section
  const numbers = document.querySelectorAll("#card1-content .card1 h2"); // Select all counters
  let hasCounted = false; // Flag to ensure counting happens only once

  const countUp = (element, target) => {
    let start = 0; // Start value
    const increment = Math.ceil(target / 100); // Increment step
    const duration = 2000; // Total animation duration in milliseconds
    const stepTime = Math.floor(duration / (target / increment)); // Time per increment

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target; // Set final value
        clearInterval(interval); // Stop the interval
      } else {
        element.textContent = start; // Update value
      }
    }, stepTime);
  };

  const onScroll = () => {
    const sectionTop = moreSection.getBoundingClientRect().top;
    const sectionBottom = moreSection.getBoundingClientRect().bottom;

    if (!hasCounted && sectionTop < window.innerHeight && sectionBottom > 0) {
      // Start counting if section is visible
      numbers.forEach((num) => {
        const target = parseInt(num.getAttribute("data-target")); // Get the target value
        countUp(num, target); // Animate the counter
      });
      hasCounted = true; // Ensure counting happens only once
    }
  };

  window.addEventListener("scroll", onScroll); // Trigger counting on scroll
});
