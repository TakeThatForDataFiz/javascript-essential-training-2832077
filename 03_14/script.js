/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

// import Backpack from "./Backpack.js";
import Book from "./Book.js";

// const everydayPack = new Backpack(
//   "Everyday Backpack",
//   30,
//   "grey",
//   15,
//   26,
//   26,
//   false,
//   "December 5, 2018 15:00:00 PST"
// );

const mockingBird = new Book(
  "To Kill A MockingBird",
  "Harper Lee",
  "333",
  "1960"
);

mockingBird.addCopiesSold(1000000);
mockingBird.addEdition();
mockingBird.addEdition();
mockingBird.addEdition();

console.log(mockingBird);
// console.log("The everydayPack object:", everydayPack);
// console.log("The pocketNum value:", everydayPack.pocketNum);
// console.log("Days since aquired:", everydayPack.backpackAge());
