// Get the burger menu element by its ID
const burgerMenu = document.getElementById("burgerMenu");

// Get the menu element by its ID
const menu = document.getElementById("menu");

// Add an event listener to the burger menu that triggers when it is clicked
burgerMenu.addEventListener("click", () => {
  // Toggle the "open" class on the burger menu (opens/closes the burger menu)
  burgerMenu.classList.toggle("open");

  // Toggle the "open" class on the menu (opens/closes the menu)
  menu.classList.toggle("open");
});
