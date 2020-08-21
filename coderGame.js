//var colors = [

//"rgb(255, 0, 0)",
//"rgb(255, 255, 0)",
//"rgb(0, 255, 0)",
//"rgb(0, 255, 255)",
//"rgb(0, 0, 255)",
//"rgb(255, 0, 255)",
//]

var numSquares = 6;
var colors = generateRandomColors(numSquares);  // function generateRandomColors(num){
var squares = document.querySelectorAll(".square");// 
var pickedColor = pickColor(); // var pickedColor = color[ ];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");



easyBtn.addEventListener("click", function(){
	// create three squares
	// create an array that contains only 3 colors
   easyBtn.classList.add("selected");
   hardBtn.classList.remove("selected");
     numSquares = 3;
	 colors = generateRandomColors(numSquares);
     pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;


    for(var i = 0; i < squares.length;i++) {

    	if(colors[i]) {
    		squares[i].style.background = colors[i];

    	}
    	else {
    		squares[i].style.background = "none";
    	}

    
    }




});




hardBtn.addEventListener("click", function(){
	// create three squares
	// create an array that contains only 3 colors

     hardBtn.classList.add("selected");
   easyBtn.classList.remove("selected");
     numSquares = 6;
	 colors = generateRandomColors(numSquares);
     pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;


    for(var i = 0; i < squares.length;i++) {

 
    		squares[i].style.background = colors[i];
    		squares[i].style.display = "block";


    	}

    
})


resetButton.addEventListener("click", function(){
	numSquares = 6;
	colors = generateRandomColors(6);
	pickedColor = pickColor ();
	colorDisplay.textContent = pickedColor;
	this.textContent= "New Colors";
	messageDisplay.textContent = "";

	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}

})



colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length;i++) {
	
// add initial colors to squares
	squares[i].style.background = colors[i];

// add click listeners to squares

    squares[i].addEventListener("click", function (){
      var clickedColor = this.style.background; // squares[i].style.bckground var clickedColor = squares[3].style.background which 
      // means (0,255, 255) = (0,255,255)
       //grab color of clicked square


       console.log(clickedColor, pickedColor);

     if (clickedColor === pickedColor) {
     	messageDisplay.textContent = "Correct";
     	resetButton.textContent = "Play Again?";
changeColors(clickedColor);   // changeColors(this.style.background)
     	h1.style.background = clickedColor;

     }
     else {
     	this.style.background = "#232323";
     	messageDisplay.textContent = "Try Again";
     }
       // compare color to pickedColor
    });



}


function changeColors (color) {                            //	changeColors(clickedColor);

															// var clickedColor = this.style.background;
//loop through all square
for(var i = 0; i <squares.length;i++) {

	squares[i].style.background = color;


}
}


function pickColor() {
	var random = Math.floor(Math.random() * colors.length);      // 3 Generate a random number and Use the array called colors to pick one color
	return colors[random];
}






function generateRandomColors(num){             // 2 Create an array of random colors; and store the results of this function in a variable called colors
	// pick random color from 0 to 255;
	// make an array
	var arr = [];

	// add num random colors to array
for(var i = 0; i < num; i++) {
	arr.push(randomColor());
}
return arr;
}


function randomColor () {                              //1 Generate random colors  
	//pick a green from 0 to 255;
	// pick a blue from 0 to 255;

var r = Math.floor(Math.random() * 256);    
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);

return "rgb(" + r + ", " + g  + ", " + b + ")";

};






