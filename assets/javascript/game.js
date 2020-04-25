$(document).ready(function() {

	// A few of my global variables
	let purplegem;
	let bluegem;
	let greengem;
	let redgem;
	let totalScore = 0; 
	let wins = 0;
	let losses = 0;

	function pickArandomNumber(numberArray) {

		// This function will pick a random number along the length of the numberArray that's put into it
		let myRandNumb = numberArray[Math.floor(Math.random() * numberArray.length)];
		// This is putting the random number chosen into the variable randNumber
		randNumber = myRandNumb;
		// This will put the random number that's chosen in place of the "0" placeholder I have
		$("#randomNumber").html(randNumber);

	} 

	let crystalNumbers = [];
	function pickRandomcrystalValue(numberArray) {

		// This function and for loop is creating 4 random numbers to push into the array above
		for (let k = 0; k < 4; k++){

			let randomCrystalNumber = numberArray[Math.floor(Math.random() * numberArray.length)];
			// This pushes the value chosen by the "random number gen" above into the empty crystalNumbers
			// array outside of this function 
			crystalNumbers.push(randomCrystalNumber);

		}

	} 

	function crystalValues(numberArray) {

		// This function will give each of the gem buttons their own random value
		// that corresponds with the position of the array specified, in this case, crystalNumbers
		purplegem = numberArray[0];
		bluegem = numberArray[1];
		greengem = numberArray[2];
		redgem = numberArray[3];

	} 

	function gameReset(myRandNumb) {

		crystalNumbers = [];
		totalScore = 0;
		$("#totalNumber").html(totalScore); 
		pickArandomNumber(randomNumber);
		pickRandomcrystalValue(crystals);
		crystalValues(crystalNumbers);
		$("#text").html("")
		$("button").attr("disabled", false)

	} 
	
	// This is a for loop that will hold the numbers 19-120, empty numberArray until the loops occurs
	let randomNumber = [];
	for (let i = 19; i < 121; i++) {
		
		// This will push the number into the randomNumber numberArray
		randomNumber.push(i);

	}

	// This is a for loop that will hold the number 1-12, empty numberArray at first
	let crystals = [];
	for (let j = 1; j < 13; j++) {

		// This pushes the numbers 1-12 into the empty crystal numberArray
		crystals.push(j);

	}

	// These are just calling all of the functions
	pickArandomNumber(randomNumber); 
	pickRandomcrystalValue(crystals); 
	crystalValues(crystalNumbers);

	// These 4 onclick functions make all of the buttons that the gems are a part of
	// functional
	$("#purplegem").on("click", function() {

		// When the purplegem button is clicked, totalScore starts at 0 and increases by the
		// random number assigned to the gem
		totalScore = purplegem + totalScore;
		// The totalNumber is the score that is shown to the player, and is replaced by the 
		// totalScore as buttons are pressed
		$("#totalNumber").html(totalScore);

	});

	$("#bluegem").on("click", function() {

		totalScore = bluegem + totalScore;
		$("#totalNumber").html(totalScore);

	});

	$("#greengem").on("click", function() {

		totalScore = greengem + totalScore;
		$("#totalNumber").html(totalScore);

	});

	$("#redgem").on("click", function() {

		totalScore = redgem + totalScore;
		$("#totalNumber").html(totalScore);

	});

	// This onclick function applies to every button on the page
	$("button").on("click", function() {
		
		// This is the winning condition, if the player is able to match their score with the
		// randNumber generated they win and then the reset function is called
		if (totalScore == randNumber) {

			wins++;
			console.log(totalScore);
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);
			$("#text").html("You won!")
			$("button").attr("disabled", true)
			setTimeout(function() {gameReset()}, 1500);

		} else if (totalScore > randNumber){

			// This is the losing condition, if the player goes over the totalScore with the gems
			// then all of this will happen
			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);
			$("#text").html("You lost! ):")
			$("button").attr("disabled", true)
			setTimeout(function() {gameReset()}, 1500);

		}

	});

});