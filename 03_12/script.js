/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import BoyChar from "./DisneyCharacter.js";
import DisneyCharacter from "./DisneyCharacter.js";

const kuzcoChar = new BoyChar(
  "Kuzco",
  14,
  false,
  true,
  true,
  false,
  "Green Alpaca hair",
  false,
  "27 January 2006"
);

console.log("This character class contains:", kuzcoChar);
console.log("First showed:", kuzcoChar.firstAired);

const ravenChar = new DisneyCharacter(
  "Raven",
  25,
  false,
  true,
  true,
  false,
  "Blonde hair",
  false,
  "17 January 2003",
  true
);

console.log("This character class contains:", ravenChar);
console.log("First showed:", ravenChar.firstAired);
//how do I assign true from ravenChar to hasGirlfriend if DisneyCharacter
console.log("Has a gf?:", ravenChar.hasGirlfriend);

let notAnymore = !ravenChar.hasGirlfriend;
console.log(notAnymore);
