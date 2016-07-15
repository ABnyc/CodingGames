/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526
var result = 0; //default value of no temperature data is provided
// Write an action using print()
// To debug: printErr('Debug messages...');

var tempsArray = temps.split(' ').map(Number);  //Converts a String to numeric array
var difference = Math.min(...tempsArray.map(Math.abs)); //finds the minimum temperature difference to 0

//find if the differnce temperature is positive or negative

if (tempsArray.indexOf(difference) == -1){
    result = -difference;
 
} else {
    result = difference;
}

print(result);
