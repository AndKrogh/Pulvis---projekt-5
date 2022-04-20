console.log("Video");

// Video script
let v = document.getElementById("myVideo");
let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let stopBtn = document.getElementById("stopBtn");
let volumeSlider = document.getElementById("volumeSlider");
let elapsedTime = document.getElementById("elapsedTime");


pauseBtn.style.display = "none";

// Play knap
playBtn.onclick = function () {
    v.play();
    this.style.display = "none";
    pauseBtn.style.display = "inline";
}

// Pause knap
pauseBtn.onclick = function () {
    v.pause();
    this.style.display = "none";
    playBtn.style.display = "inline";
}

// Stop knap
stopBtn.onclick = function () {
    v.pause();
    v.currentTime = 0;
    playBtn.style.display = "inline";
    pauseBtn.style.display = "none";
}

// Lyd slider
volumeSlider.onchange = function () {
    v.volume = volumeSlider.value / 100;
}
