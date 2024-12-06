//Part 1: Fizz Buzz
for (i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0)
        console.log("Fizz Buzz")
    else if (i % 3 == 0)
        console.log("Fizz")
    else if ( i % 5 == 0)
        console.log("Buzz")
    else
        console.log(i)
}
console.log("-----------")
//Part 3: Feeling Lucky

let mainString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let tempRow = "";
let tempCell = "";

let rowCounter = 0;
let cellCounter = 0;

mainString += "\n";

for (let i = 0; i < mainString.length; i++) {

  if (mainString[i] !== "\n") {
    tempRow += mainString[i];
  } else {
    tempRow += ",";
    rowCounter++;
    console.log(`-- Row #${rowCounter} --`);

    for (let j = 0; j < tempRow.length; j++) {

      if (tempRow[j] !== ",") {
        tempCell += tempRow[j];
      } else {
        cellCounter++;
        console.log(`Cell #${cellCounter}: ${tempCell}`);
        tempCell = "";
      }

    }

    cellCounter = 0;
    tempRow = "";
  }
}
