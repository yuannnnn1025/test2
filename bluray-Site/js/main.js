// JavaScript Document
//save the name value from the input into LS



(function() {
	"use strict";
	
	//1 create cons var or array to hold references to DOM objects
	var desc = document.querySelector('#desc'),
	text = document.querySelector("#user"),
	userClick = document.querySelector("#sub"),
	links = document.querySelectorAll(".like span"),
	name = document.querySelector('#submit'),
	clickLike = document.querySelector('.heart'),
	viewMovies = document.querySelector('#viewed p');
	
	//2 write code segments in functioms so they can control by calling each function

	function init() {
		//check to see if browser supports LS
		if(typeof Storage !== "undefined") {
			console.log('local storage supported');
			
			//localStorage.clear();
		} else {
			console.log('local storage not supported');
		}
	}
	
	//save the name of user to local storage
	function saveName() {
		var savedName = text.value;
		localStorage.setItem('sname', savedName);
		if(localStorage.getItem('sname') !== null) {
			var savename = localStorage.getItem('sname');
			
			//add name to welcome message and description
			var welcome = document.querySelector('#name').innerHTML = "Welcome " + savename + "!";
			desc.innerHTML = "Alright, "+savename+", now is the most interesting part. Make your home your own theater, choose whatever movie you want from down below and you will know what to download. Oops, I did not say, here is only list of movies, and you gotta find another website to download them from. Good Luck!";
			
	}
	}
	

	function saveMovie(e) {
		//grab the value from the field
		var savedMovie = e.target.id;
			
		//put the string value into the local storage
		localStorage.setItem('smovie', savedMovie);
		
		//save the movie by their name
		if(localStorage.getItem('smovie') !== null) {
			var savemovie = localStorage.getItem('smovie');
			console.log("The movie '" + savemovie + "' is saved");
			
			//create the posters of the movies that were chosen
			var img = document.createElement("IMG");
			img.setAttribute("src", "images/"+savedMovie+".jpg");
			img.setAttribute("width", "304");
			img.setAttribute("height", "450");
			img.setAttribute("alt", "chose movie");
			img.setAttribute("class", "chosenMovies");
			document.querySelector('#viewed').appendChild(img);
			
			viewMovies.innerHTML = "Look, Here you can see the movies that you have chosen.";
			//console.log(savemovie);
		} else{
			console.log('no more movies');
		}
		
	}
	
	//display all the storage with name and movie
	function allStorage() {
    var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        archive.push( key + '=' + localStorage.getItem(key));
    }
console.log(archive);
//document.querySelector('#show').innerHTML = archive;
    return archive;
}

	
	//3	create event listeners to link page objects to call back functions
	
	for(var i = 0; i<links.length; i++) {
		links[i].addEventListener("click", saveMovie, true);
	}
	
	window.addEventListener("load", init, false);
	name.addEventListener("click", saveName, false);
	userClick.addEventListener("click", allStorage, false);
	
})();