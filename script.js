const pieces = [
  "valsesentimentale.html",
  "dsch.html",
  "24preludesno17.html.html",
  "raindropno15.html",
  "rach_pianoconcertono2_2ndmvmnt.html",
  "traumereischumann.html",
  "humoresquedvorak.html",
  "impromptuno3schubert.html",
  "boleroravel.html",
];

document.getElementById("randomise").onclick = function getRandomIndex(pieces) {
  let index = Math.floor(Math.random() * pieces.length);
  return pieces[index];
};
// console.log(getRandomIndex(pieces));
