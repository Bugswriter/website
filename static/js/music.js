window.onload = function() {
    
    var button = document.getElementById("play-music-btn");
    var audio = document.getElementById("audio");

    button.onclick = function() {
	button.classList.toggle('o-play-btn--playing');
	audio.load();
	audio.play();
	var context = new AudioContext();
	var src = context.createMediaElementSource(audio);
	var analyser = context.createAnalyser();
	
	var canvas = document.getElementById("music-canvas");
	var jukebox = document.getElementById("jukebox");
	jukebox.style.display = "block";
	jukebox.style.margin = "auto";
	canvas.style.display = "block";	

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	var ctx = canvas.getContext("2d");

	src.connect(analyser);
	analyser.connect(context.destination);

	analyser.fftSize = 256;

	var bufferLength = analyser.frequencyBinCount;
	console.log(bufferLength);

	var dataArray = new Uint8Array(bufferLength);

	var WIDTH = canvas.width;
	var HEIGHT = canvas.height;

	var barWidth = (WIDTH / bufferLength) * 2.5;
	var barHeight;
	var x = 0;

	function renderFrame() {
	    requestAnimationFrame(renderFrame);
	    x = 0;
	    analyser.getByteFrequencyData(dataArray);
	    var theme = document.documentElement.getAttribute("data-theme");
	    if (theme === "light"){
		ctx.fillStyle = "#ffffff";
	    }else{
		ctx.fillStyle = "#000000";
	    }
	    ctx.fillRect(0, 0, WIDTH, HEIGHT);

	    for (var i = 0; i < bufferLength; i++) {
		barHeight = dataArray[i];
		
		var r = barHeight + (25 * (i/bufferLength));
		var g = 250 * (i/bufferLength);
		var b = 150;

		ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
		ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

		x += barWidth + 1;
	    }
	}

	audio.play();
	renderFrame();
    };
};
