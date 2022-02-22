/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */
// add event listener over entire grid
const grid = document.querySelector(".grid");
const cells = document.querySelectorAll(".cell");
const body = document.querySelector("body");

body.addEventListener("keyup", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");
});

grid.addEventListener("mouseenter", () => {
  grid.classList.toggle("highlight");
});

grid.addEventListener("mouseleave", () => {
  grid.classList.toggle("highlight");
});

for (let cell of cells) {
  cell.addEventListener("mouseenter", () => {
    cell.classList.toggle("emphasize");
  });
  cell.addEventListener("mouseleave", () => {
    cell.classList.toggle("emphasize");
  });
  cell.addEventListener("click", () => {
    cell.classList.add("clicked");
  });
}
