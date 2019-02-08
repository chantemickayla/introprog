var parentAccompanied = true;
var childsAge = prompt("what is your age?");
var yesNo = prompt("Are you accompanied by a parent, please enter yes or no").toLowerCase();
if (yesNo == "yes") {
    parentAccompanied = true;
} else { parentAccompanied = false; }
if ((childsAge > 12) || (parentAccompanied && (childsAge <= 12))) {
    alert("Allowed to watch movie");
} else {
    alert("Child not allowed!");
}