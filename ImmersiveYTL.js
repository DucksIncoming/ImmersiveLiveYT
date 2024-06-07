// HTML Elements
var streamWindow = document.getElementById("movie_player");
var liveButton = document.getElementsByClassName("ytp-live-badge")[0];
var playPauseButton = document.getElementsByClassName("ytp-play-button")[0]

// User preferences
var autoLive = true;

// Event Listeners
streamWindow.addEventListener("click", playPauseTrigger)

// On injection

function skipToLive(){
    var playing = playPauseButton.dataset.titleNoTooltip == "Pause";
    console.log(playing);

    if (!playing){
        liveButton.click();
        console.log("[Immersive YTL] Skipped ahead to live broadcast.");
        playPauseButton.click();
    }
}

function playPauseTrigger() {
    if (autoLive){
        skipToLive();
    }
}