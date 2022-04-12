var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = this.document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

/*Play Video*/
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

/*Pause Video*/
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
})

/*Slow down this video*/
document.querySelector("#slower").addEventListener("click", function() {
	console.log("I want to slow the video!");
	video.playbackRate *= 0.95;
	console.log("speed is ", video.playbackRate);
});

/*Speed up this video*/
document.querySelector("#faster").addEventListener("click", function() {
	console.log("speeding up");
	video.playbackRate /= 0.95;
	console.log("Speed is", video.playbackRate);
});

/*I want to skip ahead*/
document.querySelector("#skip").addEventListener("click", function() {
	console.log("skipping ahead!");
	video.currentTime += 15;
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log("video current time is ", video.currentTime);
});

/*I want to mute/unmute this video*/
//document.querySelector("#mute").addEventListener("click", function() {
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute/Unmute");
	if (video.muted == false) {
		video.muted = true;
		document.getElementById("mute").innerHTML="Unmute";
	}
	else {
		video.muted = false;
		document.getElementById("mute").innerHTML="Mute";
	}
});

/*Change volume */
document.getElementById('slider').addEventListener("click", function(){
	//document.getElementById("slider").innerHTML="slider";
	video.volume = this.value / 100;
	volume = video.volume * 100;
	document.getElementById('volume').innerHTML = volume + "%";
	console.log("Change Volume")
});

/*Styled oldSchool*/
document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Going Vintage!")
	video.classList.add('oldSchool');
});

/*Remove- Original oldSchool*/
document.querySelector("#orig").addEventListener("click", function(){
	console.log("Going Original!")
	video.classList.remove('oldSchool');
});