# Practical-Loops

Instructions
Initialize a new git repository in a local project folder, and create a JavaScript file to contain your code. Complete the activities below. For each of the activities, decide whether it is best to use for, for of, or while loops to implement the solution.
Commit frequently! Every time something works, you should commit it. Remember, you can always go back to a previous commit if something breaks.


Part 1: Fizz Buzz


To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
Accomplish the following:
Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.
Remember to commit your solution once it is working.

Part 3: Feeling Loopy


As a final task, solve the following practical problem regarding string processing.
Context: A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. You may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets. While each of these programs save their data in different formats to preserve style (e.g., font color or cell backgrounds), at their core, they are storing CSV data.
CSV data looks like this:
ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
Not very nice to look at. The “\n” is an escaped Line Feed, which indicates that the following data should begin on a new line, as follows:
ID,Name,Occupation,Age42,Bruce,Knight,4157,Bob,Fry Cook,1963,Blaine,Quiz Master,5898,Bill,Doctor’s Assistant,26
Your task is to write a script that accomplishes the following: 1. Loop through the characters of a given CSV string. 2. Store each “cell” of data in a variable. 3. When you encounter a comma, move to the next cell. 4. When you encounter the “\r\n” sequence, move to the next “row.” 5. Log each row of data.
-You do not need to format the data, the following works well.
console.log(cell1, cell2, cell3, cell4);
