// set some Global variables
let attack;
let CharacterAttack;
let CharacterHP;
let CharacterAttackVal;
let defendingCharacter;
let defendingCharacterHP;
let defendingCharacterAttackVal;

// An object to hold all of the stats for the characters so that they're easier to 
// reference in jQuery
let characters= {

    Anakin: {
        divName: "Anakin",
        Name: "Anakin Skywalker",
        visual: "../images/anakin.jpg",
        HP: 100,
        attackingPower: 10,
        counter: 5
    },
    ObiWan: {
        divName: "ObiWan",
        Name: "Obi-Wan Kenobi",
        visual: "../images/obi-wan.jpg",
        HP: 120,
        attackingPower: 8,
        counter: 15
    },
    DarthSidious: {
        divName: "darthSidious",
        Name: "Darth Sidious",
        visual: "../images/darthSidious.jpg",
        HP: 150,
        attackingPower: 5,
        counter: 20
    },
    highGround: {
        divName: "highGround",
        Name: "I HAVE THE HIGH GROUND ANAKIN",
        visual: "../images/highGround.jpg",
        HP: 180,
        attackingPower: 5,
        counter: 25
    }
}

$(document).ready(function() {

// When the player clicks on one of the characters, the site will take whichever character
// was chosen and move it to the Your Character section while moving the other 3 into the 
// Enemies section


})

// When the enemies move sections need to change background color and border color

// Clear the character select section

// If a player clicks on one of the enemies in the Enemies section it will move the chosen
// enemy and move them to the Defender section, other characters stay in their section

// Code the attack button
    // As you attack more, CharAtt goes up
    // When the attack button is hit, your character hits first, and then the enemy
    // Enemyhp-CharAtt, vice versa
    // If Charhp<1 I lose, if enemyhp<1 I win, chose next enemy
    // Show message that the player has beaten their selected enemy
    // If no enemy is there, display the message that there's no one to attack
//

// If all enemies have been defeated and charhp>1 the player wins
// Clear the text from the fights and tell the player they won
// Show the restart button underneath the text

// Reset function to reset all variables

  // Have to reset chosenCharacters att and hp stats
  // Hide chosen character and enemy characters
  // Reset the hp of all characters
  // Reset the attack power of all characters
  // Delete the text that shows after an action has been done
  // Put the pictures back in the character select screen
//