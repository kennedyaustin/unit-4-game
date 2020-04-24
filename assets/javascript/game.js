// set some Global variables
var attack;
var defend;
var attackcharacter;
var CharacterHP;
var CharacterAtt;
var defendcharacter;
var defenderHP;
var defenderAP;
var defenderCAP;
var name;
var chosenCharacter;
var YourDefender;
var characterselect = "";
var myDef = "";

// An object to hold all of the stats for the characters so that they're easier to 
// reference in jQuery
var characters = { 

	Anakin: {
		name: 'Anakin',
		visual: '../images/anakin.jpg',
		HP: 100,
		Att: 10,
		fullName: 'Anakin Skywalker',
		counterAttackPower: 5
	},

	ObiWan:{
		name: 'ObiWan',
		visual: '../images/obi-wan.jpg',
		HP: 120,
		Att: 8,
		fullName: 'Obi-Wan Kenobi',
		counterAttackPower: 12
	},

	darthSidious:{ 
		name: 'darthSidious',
		visual: '../images/darthSidious.jpg',
		HP: 150,
		Att: 10,
		fullName: 'Darth Sideous',
		counterAttackPower: 20
	},

	HighGround:{ 
		name: 'highGround',
		visual: '../images/highGround.jpg',
		HP: 180,
		Att: 12,
		fullName: 'DON\'T DO IT ANAKIN, I HAVE THE HIGH GROUND',
		counterAttackPower: 25
	}
};

$(document).ready(function() {

// When the player clicks on one of the characters, the site will take whichever character
// was chosen and move it to the Your Character section while moving the other 3 into the 
// Enemies section
$('.borders').on('click', function() {

    // This moves the character you chose to the Your Character Section
    if (characterselect == "") {

        $(this).appendTo('#chosenCharacter');

    }

    // This if/ else if statement will load the characters stats into the game
    if (chosenCharacter == characters.Anakin.name) {

        CharacterHP= characters.Anakin.HP;
        CharacterAtt= characters.Anakin.Att;

    } else if (chosenCharacter == characters.ObiWan.name) {

        CharacterHP= characters.ObiWan.HP;
        CharacterAtt= characters.ObiWan.Att;

    } else if (chosenCharacter == characters.darthSidious.name) {

        CharacterHP= characters.darthSidious.HP;
        CharacterAtt= characters.darthSidious.Att;

    } else if (chosenCharacter == characters.HighGround.name) {

        CharacterHP= characters.HighGround.HP;
        CharacterAtt= characters.HighGround.Att;

    }

    // This will move the other characters not chosen to the Enemies section on the screen
    // as well as change their background color to red
    

    // After the user picks a character all the others will disappear
    $('#characterRow').hide();

})

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