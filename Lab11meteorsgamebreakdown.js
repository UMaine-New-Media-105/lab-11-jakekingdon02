// Jake Kingdon 
// Lab 11
// Due: April 26th, 2023. 

// Below is my break down of the code below using minimal "Pseudocode"

// The code starts by defining an anonymous function that takes two arguments, j and r. Within this function, a while loop is created that will continue until it is broken out of. 
// Inside the loop, the code attempts to parse an integer from a string created by calling a function S with various arguments. 
// If the resulting integer is equal to the second argument r, the loop is broken. Otherwise, the first element of an array l is removed and added to the end of the array.
// The Asteroid constructor function is defined next. It takes two optional arguments j and l, which are used to set the position and size of the asteroid, respectively. 
// If no arguments are passed, the position is set to a random location on the canvas and the size is randomized between 10 and 50 pixels. 
// The velocity of the asteroid is also randomized. The render function draws the asteroid as a polygon with a variable number of sides, depending on the asteroid's size. 
// The update function updates the position of the asteroid based on its velocity. 
// The edges function checks if the asteroid has moved off the screen and wraps it to the other side if necessary.
// The Laser constructor function takes two arguments, pos and heading, which are used to set the initial position and velocity of the laser. 
// The update function updates the position of the laser based on its velocity. 
// The render function draws the laser as a small dot. 
// The hits function checks if the laser has hit an asteroid and returns true if it has.
// The Ship constructor function is defined. It creates a spaceship at the center of the canvas with a fixed size and velocity. 
// The render function draws the spaceship as a triangle. The turn function updates the rotation of the spaceship based on user input. 
// The boost function updates the velocity of the spaceship based on user input. 
// The update function updates the position of the spaceship based on its velocity. 
// The edges function checks if the spaceship has moved off the screen and wraps it to the other side if necessary. 
// The shoot function creates a new laser object at the position of the spaceship, aimed in the direction of its velocity.
