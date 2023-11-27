Documentation for HTML Game "Batman vs Superman"

General Overview
This HTML document serves as the foundation for the interactive game "Batman vs Superman." The structure is designed to provide a clear and intuitive user interface for the game, allowing players to choose attacks and defenses for two characters - Batman and Superman.

Document Structure

<head>: Contains metadata about the document, including character set (UTF-8), viewport for responsive design, document title, and a link to an external CSS file for styling.
<body>:
<div class="container">: The main container that encompasses all game elements.
<p id="currentPlayerDisplay">: A paragraph for displaying the current player.
Two <section class="hero"> elements: Each represents one hero (Batman and Superman) with the following sub-elements:
<h2>: A heading displaying the hero's name.
IMAGE: A placeholder for adding the hero's image (currently marked with placeholder text).
Dropdown menus (<select>) and labels (<label>) for attacks and defenses: Enable players to choose attack and defense actions for each hero.
<div class="energyDiv">: Contains paragraphs for displaying the hero's health and energy.
Game control buttons:
<button id="gameStart">: A button to start the game.
<button id="attack">: A button to perform an attack, initially disabled.
<button id="restart">: A button to restart the game.
Key Elements

Dropdown menus for attacks and defenses (<select>): Used for selecting hero actions. Each hero has its set of attack and defense options, dynamically populated through JavaScript.
Energy indicators (<p> within <div class="energyDiv">): Display the current health and energy status for each hero. These values are updated during the game.
Game control buttons: Provide users with the ability to start the game, perform attack actions, and restart the game.
Integration with JavaScript
HTML elements are connected to JavaScript code via ID attributes. JavaScript uses these IDs to manipulate the DOM, enabling game interactivity.
Event listeners are added to key elements (<select> and <button>) within the JavaScript code, allowing reactions to user actions.

Styling
CSS for this page is linked through an external file (<link rel="stylesheet" href="css/app.css" />).

JavaScript part of documetation.

The game "Batman vs Superman" is an interactive web game where two players, Batman and Superman, take turns attacking and defending. The goal of the game is to reduce the opponent's life to 0 while simultaneously maintaining your own life and managing energy for various actions.

Code Structure
The code consists of several key parts:

Player Objects: batman and superman

Define initial values, actions (attack/defense), and methods for manipulating the state (e.g., reducing life, managing energy).
UI Manipulation Functions: popuniSelectAtk and popuniSelectDef

Populate dropdown menus for attacks and defenses in the user interface.
Interface Control: AtkOrDef and unlock

Manage the availability of options in the interface based on player choices.
Game Logic: performAction

This function is the heart of the game, handling player actions and updating the game state.
Game State Updates: updateLife and updateEnergy

Update the visual display of player life and energy.
Game Start and Restart: gameStart

Initialize the game and set the starting player.
Detailed Description of Objects and Functions
Player Objects
Batman
Life: Initial value 100.
Energy: Initial value 0.
Weapons: Array of different attacks.
Defenses: Array of different defenses.
Methods:
attack(): Executes an attack on the opponent.
defense(): Activates a defensive action.
reduceLife(): Reduces Batman's life.
increaseEnergy(): Increases Batman's energy.
increaseEnergyAfterHit(): Increases energy after specific hits.
Superman
Similar characteristics and methods as Batman, customized for Superman.
UI Manipulation Functions
popuniSelectAtk: Populates the dropdown menu for attacks.
popuniSelectDef: Populates the dropdown menu for defenses.
Interface Control
AtkOrDef: Enables or disables attack/defense options.
unlock: Enables or disables the choice of attack/defense based on the current selection.
Game Logic
performAction: Manages the execution of player actions and updates the game state. Checks the success of actions and changes the current player.
Updating Game State
updateLife: Updates the display of player life.
updateEnergy: Updates the display of player energy.
Starting and Restarting the Game
gameStart: Sets the starting player and allows the game to begin.

Game Flow Control: setTimeout and nakonAkcije

Introducing the setTimeout function to create a delay between player attacks.
Added the nakonAkcije function to handle actions after each player's turn.
End of Game Notification

Added a paragraph that displays a message to the user about the winner and the end of the game.
With these updates, the game now includes a delay between player attacks, a function to handle actions after each turn, and an end-of-game notification to inform the user about the winner and the game's conclusion.