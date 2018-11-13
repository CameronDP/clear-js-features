/**
 * Creates a Carousel. 
 * The code here is changed to take advantage of objects for storing 
 * the elements that makeup the carousel as well as the sets of an 
 * image and caption that are the possible carousel contents.
 */

//global variables
var carousel = {element: "", content: {imageElement: "", captionElement: ""}};//The global carousel variable, empty right now.
var carouselContents = [{image: "lion.jpg", caption: "This is a lion."},
						{image: "Canine2.jpg", caption: "AW LOOK AT THESE THEY ARE SO CUTE"}, 
						{image: "catdog.gif", caption: "what is this?"}, 
						{image: "bojack.jpg", caption: "Bojack"}, 
						{image: "horses.jpg", caption: "Horses are a bunch of naysayers"}];
var index = 0;
var intervalId; //Stores the interval ID, which is needed to remove the interval.

//Setup for the carousel. Runs when the window is completely loaded. 
//This isn't optimal, but works without adding things to the html file.
window.addEventListener("load", function(){
		console.log("Window loaded");
		init();
});

function init(){
	carousel.element = document.getElementById("carousel");
	carousel.content.imageElement = document.getElementById("mainImage");
	carousel.content.captionElement = document.getElementById("mainImageCaption");
	changeImage();
	// Runs changeImage() every 5 seconds and stores the returned ID value
	intervalId = setInterval(changeImage, 5000);
	
	//stops the carousel if the mouse is on the picture*
	mainImage.onmouseover = function () {
		clearInterval(intervalId);
	};
	
	//restarts the rotation when the mouse leaves*
	mainImage.onmouseout = function () {
		intervalId = setInterval(changeImage, 5000);
	};
}

function changeImage(){
  carousel.content.imageElement.setAttribute("src", carouselContents[index].image);
  carousel.content.captionElement.innerHTML = carouselContents[index].caption;
  
  //Increments the index while staying within the array bounds
  index = (index + 1) % carouselContents.length;
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