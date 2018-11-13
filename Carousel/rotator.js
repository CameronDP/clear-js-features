/**
 * Creates a Carousel.
 * The code used here is a slightly adjusted version of the code 
 * given to me on Wednesday (10/24/2018). I added aditional comments 
 * and changed some things such as the seperate array indexes 
 * becoming a single variable and changing a variable name to 
 * intervalId, to better reflect its purpose.
 */

//global variables

var mainImage, mainImageCaption;

//Using object's, these two arrays could be a single array.
//var carouselContents = [{image: "lion.jpg", caption: "This is a lion."}, {image: "Canine2.jpg", caption: "AW LOOK AT THESE THEY ARE SO CUTE"}/*, etc.*/];
var imageArray = ["lion.jpg","Canine2.jpg","catdog.gif","bojack.jpg","horses.jpg"];
var captionArray = ["This is a lion.","AW LOOK AT THESE THEY ARE SO CUTE","what is this?","Bojack","Horses are a bunch of naysayers"];
var index = 0;
var intervalId;

var dots = document.getElementsByClassName("dot");
//Setup for the carousel. Runs when the window is completely loaded. 
//This isn't optimal, but works without adding things to the html file.
window.addEventListener("load", function(){
		console.log("Window loaded");
		init();
});

function init(){
	mainImage = document.getElementById("mainImage");
	mainImageCaption = document.getElementById("mainImageCaption");
	changeImage();
	// Runs changeImage() every 5 seconds and stores the returned ID value
	intervalId = setInterval(changeImage, 5000)
	
	//stops the carousel if the mouse is on the picture*
	mainImage.onmouseover = function () {
		clearInterval(intervalId);
	};
	
	//restarts the rotation when the mouse leaves*
	mainImage.onmouseout = function () {
		intervalId = setInterval(changeImage,5000);
	};
}

function changeImage(){
  mainImage.setAttribute("src", imageArray[index]);
  mainImage.setAttribute("style", "width:100%");
  mainImageCaption.innerHTML = captionArray[index];
  changeActiveDot(index);
  
  //Increments the index while staying within the array bounds
  //Assumes imageArray and captionArray have the same length
  index = (index + 1) % imageArray.length;
  if (index < 0)
  {
	  index = imageArray.length - 1;
  }
  
}

function setImage(idx)
{
	index = idx % imageArray.length;
	if (index < 0)
    {
	  index = imageArray.length - 1;
    }
	mainImage.setAttribute("src", imageArray[index]);
	mainImage.setAttribute("style", "width:100%");
    mainImageCaption.innerHTML = captionArray[index];
	changeActiveDot(index);
}

function plusSlides(n)
{
	setImage(index + n);
}

function changeActiveDot(idx)
{
	//resets dots
	for ( i = 0; i < dots.length; i++)
	{
		dots[i].className = "dot";
	}
	//gives dot active class
	dots[index].className += " active";
}
// *Specifically, these two statements define annonymous (unnamed) functions that will perform the 
// desired behavior for the event. These annonymous functions are assigned to the particular 
// event attributes (onmouseover and onmouseout) of the mainImage element. The functions are not 
// executed until the event occurs.
// The browser handles events; Whenever an event occurs, the browser calls the function(s)
// assigned to the particular event attribute.
// There are other ways to assign functions to event attributes. Often 
// <object>.AddEventListener(type, listener) is used. Variable type is a String that contains 
// an event type (example: "mouseover" or "mouseout") and variable listener is a function.