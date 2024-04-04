console.log("hello world!");
console.log("JS Rocks!");

const message = "This is a variable.";

// String vs variable: its all about the ""
console.log(message); // -> this is a variable
console.log("message"); // -> message

// document === DOM (Document Object Model)
const title = document.querySelector('[data-js="title"]');

console.log(title);

title.textContent = "Hello World";

// Actions on our website (i.e. by users) are called events

title.addEventListener("click", function () {
  console.log("Title clicked!");
});

// Dark mode logic
const bodyElement = document.querySelector("[data-js=body]");
const darkModeButton = document.querySelector("[data-js=dark-mode-button]");
const lightModeButton = document.querySelector("[data-js=light-mode-button]");
const toggleButton = document.querySelector("[data-js=toggle-mode-button]");

darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
  title.textContent = "Dark Mode";
});

lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
  title.textContent = "Light Mode";
});

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  title.textContent = "No idea, the other thing.";
});
