//Variables
var numSquares = 6;

//Selectors
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var resetbutton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.querySelector("#colorDisplay");

//Initial Setup
refreshGame();

//Mode Event Listeners
for (var i = 0;  i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		refreshGame(numSquares);
	});
}

//RESET BUTTON
resetbutton.addEventListener("click", function(){
	refreshGame();
});

//Refreshes the game whether the hard, easy or reset button is selected
function refreshGame(){
	//Logic Changes
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	difficultySelector(numSquares);
	colorSquares();
	playGame();

	//UI Changes
	resetbutton.textContent = "New Colors";
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
}

//Changes the color of the squares
function changeColors(color){
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = color;
	}
}

//Returns a random color to be the target color
function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

//Generates random RGB color array
function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

//Generares random colors and returns the string
function randomColor(){
	var red = Math.floor(Math.random() * 256)
	var green = Math.floor(Math.random() * 256)
	var blue = Math.floor(Math.random() * 256)
	return("rgb(" + red + ", " + green + ", " + blue + ")")
}

//Assigns generate colors to squares
function colorSquares(){
	for (var i = squares.length - 1; i >= 0; i--) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
}

//Checks for clicks on squares and evaluates if correct or wrong
function playGame(){
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].addEventListener("click", function(){
			if(this.style.backgroundColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
				resetbutton.textContent = "Play Again?"
			}
			else {
				this.style.backgroundColor = "#232323"
				messageDisplay.textContent = "Try Again!"
			}
		});
	}
}

//Difficulty Selector
function difficultySelector(num){
	if(num === 3){
		for (var i = 3; i < squares.length; i++) {
			squares[i].style.display = "none";
		}	
	}
	else{
		for (var i = 3; i < squares.length; i++) {
			squares[i].style.display = "block";
		}
	}
}