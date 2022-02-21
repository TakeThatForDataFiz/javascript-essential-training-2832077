/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
// import Backpack from "./Backpack.js";
import Computer from "./Computer.js";
import Monitor from "./Monitor.js";

const newMonitor = new Monitor("HP", (36, 5), 40000);

const sample = new Computer("Intel", "CyberSpace", newMonitor, "Ryzen");

console.log("Monitor is: ", newMonitor);
console.log("Computer is: ", sample);
