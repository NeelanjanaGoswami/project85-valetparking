//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
car2_width  = 75;
car2_height = 100;


background_image = "parkingLot.jpg";
car2_image = "car2.png";

//Set initial position for a car image.
car2_x = 5;
car2_y = 225;

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	car2_imgTag = new Image();
	car2_imgTag.onload = uploadcar2;
	car2_imgTag.src = car2_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadcar2() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(car2_y >= 0){
		car2_y = car2_y - 10;
		console.log("When up arrow is pressed, + " + car2_x + " | y = " + car2_y);
		uploadBackground();
		uploadcar2();
	}
}

function down()
{
	//Define function to move the car downward
	if(car2_y >= 0){
		car2_y = car2_y + 10;
		console.log("When down arrow is pressed, + " + car2_x + " | y = " + car2_y);
		uploadBackground();
		uploadcar2();
	}
}

function left()
{
	//Define function to move the car left side
	if(car2_x >= 0){
		car2_x = car2_x - 10;
		console.log("When left arrow is pressed, + " + car2_y + " | x = " + car2_x);
		uploadBackground();
		uploadcar2();
	}
}

function right()
{
	//Define function to move the car right side
	if(car2_x >= 0){
		car2_x = car2_x + 10;
		console.log("When right arrow is pressed, + " + car2_y + " | x = " + car2_x);
		uploadBackground();
		uploadcar2();
	}
}
