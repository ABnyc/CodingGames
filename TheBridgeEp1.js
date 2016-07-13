/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var road = parseInt(readline()); // the length of the road before the gap.
var gap = parseInt(readline()); // the length of the gap.
var platform = parseInt(readline()); // the length of the landing platform.

// game loop
while (true) {
    var speed = parseInt(readline()); // the motorbike's speed.
    var coordX = parseInt(readline()); // the position on the road of the motorbike.
    var action;
    var totalDistance = road + gap + platform;
    var distanceToGap;
    
    // Write an action using print()
    // To debug: printErr('Debug messages...');
    distanceToGap = road - coordX;
    if ((speed < gap) && (distanceToGap > 0)) {
        var distanceToPlatform;
     action = "SPEED";
     coordX = coordX + speed;
     distanceToGap = road - coordX;
   
     //print(coordX);
    } else if ((speed > gap ) && (distanceToGap === 1) ) {
        action = "JUMP";
        coordX = coordX + speed;
        distanceToGap = road - coordX;
       
    } else if ((speed > gap ) && (distanceToGap < 0) ) {
        action = "SLOW";
    } else if ((speed === (gap + 1 )) && (distanceToGap != 1) ){
        action = "WAIT";
         coordX = coordX + speed;
     distanceToGap = road - coordX;
    }else if ((speed > (gap + 1 )) && (distanceToGap != 1) ){
        action = "SLOW";
         coordX = coordX + speed;
     distanceToGap = road - coordX;
    }
    
    // A single line containing one of 4 keywords: SPEED, SLOW, JUMP, WAIT.
    print(action);
    //print(distanceToGap);
}
