/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
const mainBody = document.querySelector("main");

function addUL(mainBody) {
  let newUL = document.createElement("ul");
  mainBody.appendChild(newUL);
}

const addItems = function (UL, numItems) {
  for (let i = 0; i < numItems; i++) {
    let newLI = document.createElement("li");
    newLI.innerHTML = `Item ${i + 1}`;
    UL.appendChild(newLI);
  }
};

const popItem = (UL) => {
  let poppedLI = document.querySelector("ul li:last-child");
  poppedLI.parentElement.removeChild(poppedLI);
  console.log(poppedLI);
};

addUL(mainBody);
createdUL = document.querySelector("ul");
addItems(createdUL, 5);
popItem(createdUL);
