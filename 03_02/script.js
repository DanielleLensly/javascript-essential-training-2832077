/**
 * Create a Backpack object.
 */

const catToys = {
  mouse: 10,
  favMouse: "red & blue destroyed ones",
  hasLid: false,
  handle: "wood",
  treats: {
    hasSalmon: false,
    hasBeef: false,
    hasChicken: false,
  },
  toString: function () {
    return `Cat treats: ${this.treats.hasSalmon},${this.treats.hasBeef},${this.treats.hasChicken}  `;
  },
  needToBuy: function () {
    if (this.treats.hasBeef === true) {
      return `No need to buy beef cat treats`;
    } else {
      return `The cats urgently need beef flavoured treats.`;
    }
  },
};

console.log("Stuff in the cat toy box:", catToys);
console.log("The cats have the following treats", catToys.treats);

var buyCatTreats = catToys.treats;

console.log("The treats are:", buyCatTreats);

console.log(catToys.toString());
console.log(catToys.needToBuy());

// const backpack = {
//   name: "Everyday Backpack",
//   volume: 30,
//   color: "grey",
//   pocketNum: 15,
//   strapLength: {
//     left: 26,
//     right: 26,
//   },
//   lidOpen: false,
//   toggleLid: function (lidStatus) {
//     this.lidOpen = lidStatus;
//   },
//   newStrapLength: function (lengthLeft, lengthRight) {
//     this.strapLength.left = lengthLeft;
//     this.strapLength.right = lengthRight;
//   },
// };

// console.log("The backpack object:", backpack);
