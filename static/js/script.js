function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

function getRandomImage() {
    path = '/pics/'
    var num = randomNumber(1000, 1194);
    var img = path + num + '.jpg';
    return img;
}

document.addEventListener('DOMContentLoaded', (event) => {
    var gal = document.getElementById('img-gallery');
    for(var i = 0; i < 3; i++){
	var img = document.createElement("img");
	img.src = getRandomImage();
	gal.appendChild(img);
    }
});


