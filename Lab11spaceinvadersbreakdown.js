// Jake Kingdon 
// Lab 11
// April 26th, 2023.

// My break down of the code below: minimal usage of "Pseudocode Code"

// The first line initializes a variable y to the string "A".
// The second line defines a function C() that returns an array of strings. This function is assigned to C.
// The array of strings returned by C() is immediately assigned to a variable i, and a while loop is entered.
// The decoded string is then compared to a constant value Z.
// The code inside the while loop shifts the first element of i to the end of the array repeatedly until the decoded string matches Z.
// Once the while loop completes, i contains a set of strings that are used elsewhere in the program as messages to the user.
// The canvasSize object is initialized with properties width and height.
// The player object is initialized with properties x and y.
// The bulletSize and enemySize variables are set to integers.
// The bullets array is initialized to an empty array.
// The bulletColor variable is set to a boolean value.
// The level variable is set to 0.
// The enemies array is initialized to an empty array.
// The lastTime variable is set to null.
// The lives variable is set to 3.
// The isDead variable is set to false.
// The isInitial variable is set to true.
// The setup() function is defined. This function creates a canvas using the canvasSize object, sets the frame rate to 30 frames per second, sets the lastTime variable to the current time using the millis() function, and calls the insertEnemy() function.
// The draw() function is defined. This function is called repeatedly and is responsible for updating the game state and rendering the game elements.
// If isInitial is true, the game title and instructions are displayed using the text() function, and the noLoop() function is called to stop the draw() function from being called repeatedly.
// Otherwise, the update(), clear(), background(), drawPlayer(), drawEnemies(), drawBullets(), and pop() functions are called in sequence.
// The update() function updates the game state.
// The clear() function clears the canvas.
// The background() function sets the background color.
// The drawPlayer() function draws the player character.
// The drawEnemies() function draws the enemy characters.
// The drawBullets() function draws the bullets.
// The push() function is called to save the current drawing style.
// If lives is greater than 0, the number of remaining lives is displayed using the text() function. Otherwise, the isDead variable is set to true, a skull and crossbones emoji is // displayed using the text() function, and the game over message is // displayed using the text() function.
// The pop() function is called to restore the previous drawing style.
// The drawBullets() function uses the push() and pop() functions to save and restore the current drawing style
