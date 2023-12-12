// Create a reference for the canvas
canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
img_width = 300;
img_height = 100;

var img_imgTag;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown" , my_keydown);
	//write a code to check the type of key pressed
function my_keydown(e){

	keyPressed = e.keyCode;
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			alphabetkey();
			document.getElementById("d1").innerHTML="You pressed an Alphabet Key";
			console.log(alphabetkey());


		}

		if(keyPressed >=48 && keyPressed<=57){
			numkey();
			document.getElementById("d1").innerHTML="You pressed an Number Key";
			console.log(numkey());


		}

		if(keyPressed >=37 && keyPressed<=40){
			arrowkey();
			document.getElementById("d1").innerHTML="You pressed an Arrow Key";
			console.log(alphabetkey());


		}

		if(keyPressed==15 || keyPressed==17 || keyPressed==27){
			specialkey();
			document.getElementById("d1").innerHTML="You pressed a Special Key";
			console.log(specialkey());


		}

}


function alphabetkey()
{
	img_image="Alpkey.png";
	add();
}
function numkey()
{
	img_image="numkey.png";
	add();	
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();	
}
function otherkey(){
	img_image="otherkey.png";
add();
}

	