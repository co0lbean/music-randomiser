const pieces = [
  "valsesentimentale.html",
  //"dsch.html",
  "24preludesno17.html",
  //"raindropno15.html",
  "rach_pianoconcertono2_2ndmvmnt.html",
  "traumereischumann.html",
  "humoresquedvorak.html",
  "impromptuno3schubert.html",
  //"boleroravel.html",
];

document.getElementById("randomise").onclick = function () {
  console.log("Button clicked!");
  let index = Math.floor(Math.random() * pieces.length);
  let randomPiece = pieces[index];
  console.log(randomPiece);
  window.location.href = randomPiece;
};
//Goal: user can search through content of the table as they add inputs. If they type something that doesn't match, statement says "No match found pops up"
//User sequence
// e.g. user types "H"
// Table shows rows containing text that has "H"
//user then types p -> input is Hp
// table doesnt show any rows
// table shows statement "No match found!"
//How to get there
//1. Set up
//Making search input non-case sensitive:
//computer needs to convert all text input to lowercase
//computer needs to convert all text in table to lowercase
//set up a switch maybe? like set matchFound = false by default, then once a match found change to true and dont release statement?
//2. Results appearance
//Show rows containing the result
//if no match, shows statement and no rows
//2. Loop
// First loop through rows
// nested loop through cells within rows
// - in nested loop, try to match the input to the textcontent of the cells
// if match found, change found = true
//add if statement:
// if found = true, show rows with match
// else, do not show rows, instead show statement "No match found"
let input = document.getElementById("searchInput");
let table = document.getElementById("all-pieces");
let rows = table.getElementsByTagName("tr");
let noMatchMessage = document.getElementById("noMatch");
input.addEventListener("input", () => {
  let filter = input.value.toLowerCase();
  let matchFound = false;
  //loop through rows
  for (let i = 1; i < rows.length; i++) {
    let row = rows[i];
    let cells = row.getElementsByTagName("td");
    let found = false;
    for (let j = 0; j < cells.length; j++) {
      let cell = cells[j];
      if (cell.textContent.toLowerCase().indexOf(filter) > -1) {
        found = true;
        matchFound = true;
        break;
      }
    }
    if (found) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
  if (!matchFound) {
    noMatchMessage.style.display = "block";
  } else {
    noMatchMessage.style.display = "none";
  }
});
//
