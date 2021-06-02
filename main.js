// import prompt-sync

const prompt = require('prompt-sync')( );

//get input from user

<<<<<<< HEAD
const color = prompt('Enter a color or a "color + color": ');
=======
const color = prompt('Enter a color?');
>>>>>>> b53357e29a362b4ba657a3f2f1b151d2cf546739

const rainBow = (color);

//color set

<<<<<<< HEAD
// Color combining

const isPurple = 'red + blue';
const isOrange = 'red + yellow';
const isGreen = 'blue + yellow';

//Color deconstructing

const redBlue = 'purple';
const redYellow = 'orange';
const blueYellow = 'green'; 
=======
const isRed = red;
const isBlue = blue;
const isYellow = Yellow;

// Color combining

const isPurple = (isRed + isBlue);
const isOrange = (isRed + isYellow);
const isGreen = (isBlue + isYellow);

//Color deconstructing

const redBlue = purple;
const redYellow = orange;
const blueYellow = green; 
>>>>>>> b53357e29a362b4ba657a3f2f1b151d2cf546739

//log out colors

if (rainBow === isPurple){
    console.log('Purple');
}
else if (rainBow === isOrange){
    console.log('Orange');
}
else if (rainBow === isGreen){
    console.log('Green');
}
else if (rainBow === redBlue){
    console.log('Red + Blue');
}
else if (rainBow === redYellow){
    console.log('Red + Yellow');
}
else if (rainBow === blueYellow){
    console.log('Blue + Yellow');
}
else{
    console.log('Error');
}
<<<<<<< HEAD

=======
>>>>>>> b53357e29a362b4ba657a3f2f1b151d2cf546739
