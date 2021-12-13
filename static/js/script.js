function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

function getRandomImage() {
    path = '/pics/'
    var num = randomNumber(1000, 1150);
    var img = path + num + '.jpg';
    return img;
}

document.addEventListener('DOMContentLoaded', (event) => {
    var toggle = document.getElementById("theme-toggle");
    toggle.onclick = function() {
	var currentTheme = document.documentElement.getAttribute("data-theme");
	var storedTheme = localStorage.getItem('theme') ||
	    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark");
	
	if (storedTheme)
	    document.documentElement.setAttribute('data-theme', storedTheme)
	
	var targetTheme = "dark";

	if (currentTheme === "dark") {
            targetTheme = "light";
	}

	document.documentElement.setAttribute('data-theme', targetTheme)
	localStorage.setItem('theme', targetTheme);
    };
    
    var gal = document.getElementById('img-gallery');
    for(var i = 0; i < 3; i++){
	var img = document.createElement("img");
	img.src = getRandomImage();
	gal.appendChild(img);
    }
});


