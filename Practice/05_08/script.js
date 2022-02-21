/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */
const backpackImgs = document.querySelectorAll(".backpack__image");

backpackImgs.forEach(
  (backpack) => (backpack.querySelector("img").alt = "Image of Backpack")
);
