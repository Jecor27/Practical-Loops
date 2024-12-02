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

let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

let cell = "";
let j = 0;
for (let i = 0; i <= str.length; i++) {
    if (str[i] !== "\n") {

        cell += str[i];

    }
    else {
        j++;
        console.log(cell);
        cell = "";
        continue;
    }
}


