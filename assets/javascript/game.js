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

		crystalNumbers = []; // clears crystal number values

		pickArandomNumber(randomNumber);

		pickRandomcrystalValue(crystals);

		crystalValues(crystalNumbers);

		totalScore = 0;
		$("#totalNumber").html(totalScore);

		alert(myRandNumb);
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

	pickArandomNumber(randomNumber); 
	pickRandomcrystalValue(crystals); 
	crystalValues(crystalNumbers);

		// crystal button functions

		$("#purplegem").on("click", function() {

			totalScore = purplegem + totalScore;
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

	$("button").on("click", function() {
		
		if (totalScore == randNumber) {

			wins++;
			console.log(totalScore);
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);
			setTimeout(function() {gameReset("You won!")}, 500);

		} else if (totalScore > randNumber){

			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);
			setTimeout(function() {gameReset("Aww, you lost!")},500);

		}

	});

}); // end of script
