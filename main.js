// import prompt-sync

const prompt = require('prompt-sync')( );

//get input from user

const color = prompt('Enter a color or a "color + color": ');

const rainBow = (color);

//color set

// Color combining

const isPurple = 'red + blue';
const isOrange = 'red + yellow';
const isGreen = 'blue + yellow';

//Color deconstructing

const redBlue = 'purple';
const redYellow = 'orange';
const blueYellow = 'green'; 

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

