# BatmanVsSuperman
POKUSAJ
Introduction
This project represents a simulation of a battle between two superheroes: Batman and Superman. Each superhero has their specific attacks, energy, and defense mechanisms.

Setup and Installation
To run this project, all you need is a web browser. Simply open the HTML file in any web browser.

Module and Function Descriptions
Batman Object
energy: Indicates Batman's current energy (health).
weapons: A list of attacks that Batman can use.
blocking: An indicator of whether Batman has activated defense.
decreaseEnergy(x): A method that decreases energy by the specified value x.
attack(enemy, move): A method by which Batman attacks the opponent with a specific move.
defense(defenseType): A method to activate a specific type of defense.

Superman Object
energy: Indicates Superman's current energy (health).
weapons: A list of attacks that Superman can use.
evading: An indicator of whether Superman has activated defense.
decreaseEnergy(x): A method that decreases energy by the specified value x.
attack(enemy, move): A method by which Superman attacks the opponent with a specific move.
defense(defenseType): A method to activate a specific type of defense.

Dynamic Population of Dropdown Menus
Within the web interface of the BatmanVsSuperman application, users can select a superhero and then, based on their choice, the application provides dynamic dropdown menus for selecting the corresponding attacks and defenses available to that hero.

heroji Object
This object consolidates all the superhero objects for easier access.

const heroji = {
    batman: batman,
    superman: superman
};

Event Listener for Hero Selection
An event listener is attached to the dropdown menu where users select their desired superhero. Once a superhero is chosen, the available attacks and defenses for that hero are populated in the respective dropdown menus.

document.getElementById('hero').addEventListener('change', function(event) {
    const odabraniHeroj = event.target.value;  // Fetches the value of the selected hero
    const napadi = heroji[odabraniHeroj].oruzje;  // Retrieves the attacks specific to the chosen hero

    // Depending on the selected hero, fetches the corresponding defenses
    const odbrane = odabraniHeroj === 'batman' ? ['blok', 'lecenje'] : ['izbegavanje'];

    populateSelect('attack', napadi);  // Populates the attack dropdown
    populateSelect('defense', odbrane);  // Populates the defense dropdown
});

populateSelect Function
This function is responsible for dynamically updating dropdown menus based on the selected hero. It accepts two arguments: the ID of the dropdown element to be populated (elementId) and the list of options to be added (options).

function populateSelect(elementId, options) {
    const odabraniElement = document.getElementById(elementId);  // Fetches the dropdown element
    odabraniElement.innerHTML = '';  // Clears the current dropdown options

    // Iterates over the provided options and adds them to the dropdown
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.toLowerCase().replace(/ /g, '_');
        optionElement.textContent = option;
        odabraniElement.appendChild(optionElement);
    });
}

Note: When adding new attacks or defenses to the Batman and Superman objects, ensure that the corresponding logic in the event listener and the populateSelect function is updated as necessary. This ensures that the dropdown menus will reflect the available choices correctly.

Coding and Conventions
The code follows the ES6 JavaScript standard. Consistent formatting and naming of functions and variables are recommended.
