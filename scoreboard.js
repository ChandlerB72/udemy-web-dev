var p1score = 0;
var p2score = 0;
var winScore = 5;
var gameOver = false;
var p1display=  document.querySelector("#p1display");
var p2display =  document.querySelector("#p2display");

document.querySelectorAll("button")[0].addEventListener("click", function(){
	if(!gameOver){
		p1score++;
		if(p1score === winScore){
			gameOver = true;
					p1display.style.color = "green";
		}
		p1display.textContent = p1score;
	}
});

document.querySelectorAll("button")[1].addEventListener("click", function(){
	if(!gameOver){
		p2score++;
		if(p2score === winScore){
			gameOver = true;
			p2display.style.color = "green";
		}
	p2display.textContent = p2score;
	}
});

document.querySelectorAll("button")[2].addEventListener("click", function(){
	reset();
});

document.querySelector("input").addEventListener("change", function(){
	document.querySelector("#winningScore").textContent = this.value;
	winScore = Number(this.value);
	reset();
});


function reset(){
	p1score = 0;
	p2score = 0;
	gameOver = false;
	p1display.textContent = p1score;
	p2display.textContent = p2score;
	p1display.style.color = "black";
	p2display.style.color = "black";
}