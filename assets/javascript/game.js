// set some Global variables
var CharacterHP;
var CharacterAtt;
var defenderHP;
var defenderCounters;
var name;
var chosenCharacter;
var chosenDefender;
var characterselect = "";
var DefJedi = "";

// An object to hold all of the stats for the characters so that they're easier to 
// reference in jQuery
var characters = { 

	Anakin: {
        name: 'Anakin',
        fullName: 'Anakin Skywalker',
		visual: '../images/anakin.jpg',
		HP: 100,
		Att: 10,
		defenderCounters: 5
	},

	ObiWan:{
        name: 'ObiWan',
        fullName: 'Obi-Wan Kenobi',
		visual: '../images/obi-wan.jpg',
		HP: 120,
		Att: 8,
		defenderCounters: 12
	},

	darthSidious:{ 
        name: 'darthSidious',
        fullName: 'Darth Sideous',
		visual: '../images/darthSidious.jpg',
		HP: 150,
		Att: 10,
		defenderCounters: 20
	},

	HighGround:{ 
        name: 'highGround',
        fullName: 'DON\'T DO IT ANAKIN, I HAVE THE HIGHGROUND',
		visual: '../images/highGround.jpg',
		HP: 180,
		Att: 12,
		defenderCounters: 25
	}
};

$(document).ready(function() {

// When the player clicks on one of the characters, the site will take whichever character
// was chosen and move it to the Your Character section while moving the other 3 into the 
// Enemies section
$('.borders').on('click', function() {

    // When the enemies move sections need to change background color and border color
    // This moves the character you chose to the Your Character Section
    if (characterselect == "") {	       

        $(this).appendTo('#chosenCharacter');
        characterselect = $(this);
        // This will give a value to the variable chosenCharacter, since when I put a console.log
        // inside and outside of this if statement it returned undefined
        chosenCharacter= $(characterselect).attr("value")
        console.log(chosenCharacter)
        
    }


    for (var i = 0; i < 4; i++) {

        //https://stackoverflow.com/questions/55292906/what-does-in-javascript the link helped me figure out how to call
        // it, the ._ will call the borders object and add the number of loops i onto the number I have in each of my 
        // characterRow classes with _#
        // This will move the other characters not chosen to the Enemies section on the screen
        // as well as change their background color to red
        $('._' + [i]).not(characterselect).appendTo('#Enemies' + [i]);

        $('._' + [i]).not(characterselect).css({'background-color': 'red', 'border': '2px solid black', 'min-height': '50%', 'min-width': '100%'});

    }
    
    // This if/ else if statement will load the characters stats into the game
    if (chosenCharacter == characters.Anakin.name) {

        CharacterHP= characters.Anakin.HP;
        CharacterAtt= characters.Anakin.Att;
        $('#Anakin').html(CharacterHP)

    } else if (chosenCharacter == characters.ObiWan.name) {

        CharacterHP= characters.ObiWan.HP;
        CharacterAtt= characters.ObiWan.Att;
        $('#ObiWan').html(CharacterHP)

    } else if (chosenCharacter == characters.darthSidious.name) {

        CharacterHP= characters.darthSidious.HP;
        CharacterAtt= characters.darthSidious.Att;
        $('#darthSidious').html(CharacterHP)

    } else if (chosenCharacter == characters.HighGround.name) {

        CharacterHP= characters.HighGround.HP;
        CharacterAtt= characters.HighGround.Att;
        $('#highGround').html(CharacterHP)

    }

    // Clear the character select section
    // After the user picks a character all the others will disappear
    $('#characterRow').hide();

})

// If a player clicks on one of the enemies in the Enemies section it will move the chosen
// enemy and move them to the Defender section, other characters stay in their section
$('.move').on('click', function() {

    // This line of code will move the selected enemy Jedi to the Defender area of the website while also loading their stats
    $(this).appendTo('#DefendingJedi')
    DefJedi = $(this)
    // The lines above and below this comment help assign the chooseDefender variable
    // a value
    chosenDefender= $(DefJedi).children().attr('value')
    $('#Defeated').empty()
    $('#NoEnemies').empty()
    console.log(chosenDefender)

    if (chosenDefender == characters.ObiWan.name) {

        defenderHP= characters.ObiWan.HP
        defenderCounters= characters.ObiWan.defenderCounters
        defenderName= characters.ObiWan.fullName

    } else if (chosenDefender == characters.Anakin) {

        defenderHP= characters.Anakin.HP
        defenderCounters= characters.Anakin.defenderCounters
        defenderName= characters.Anakin.fullName

    } else if (chosenDefender == characters.darthSidious) {

        defenderHP= characters.darthSidious.HP
        defenderCounters= characters.darthSidious.defenderCounters
        defenderName= characters.darthSidious.fullName

    } else if (chosenDefender == characters.HighGround) {

        defenderHP= characters.HighGround.HP
        defenderCounters= characters.HighGround.defenderCounters
        defenderName= characters.HighGround.fullName

    }

    console.log(defenderHP)
    console.log(defenderCounters)

})

// Code the attack button
    // As you attack more, CharAtt goes up
    // When the attack button is hit, your character hits first, and then the enemy
    // Enemyhp-CharAtt, vice versa
    // If Charhp<1 I lose, if enemyhp<1 I win, chose next enemy
    // Show message that the player has beaten their selected enemy
    // If no enemy is there, display the message that there's no one to attack
//

$('#AttackButton').on('click', function() {

    // This line of code references the id DefendingJedi to see if there has been anything put into it
    // if there hasn't then it will show the message below, when no one has been chosen the length will == 0
    if ($('#DefendingJedi').children().length == 0) {

        $('#NoEnemies').html('There is no enemy here at the time, please choose one from above.')

    }

    if (!(CharacterHP > 1) || !(defenderHP > 1)) {

        // This will decrease the defending Jedi's HP
        defenderHP = (defenderHP - CharacterAtt)
        CharacterHP = (CharacterHP - defenderCounters)
        // This will show the decrease in HP for the defender
        $('.' + chosenDefender).html(defenderHP)
        $('.' + chosenCharacter).html(CharacterHP)
        // This is what will show when you attack a Jedi that is defending
        $('#youAttacked').html('You attacked ' + defenderName + 'for ' + CharacterAtt + 'damage.')
        $('#defenderAttackedBack').html(defenderName + ' attacked you back for ' + defenderCounters + ' damage.')

    }

})



})

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