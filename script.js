var vid = document.getElementById('myVideo');

function getVideoStaus() {
    // var video=document.getElementsByTagName('video');
    var vid = document.getElementById("myVideo");
    vid.onplay = function () { document.getElementById('message').innerHTML = "Video Play Event Performed " }
    vid.onended = function () { document.getElementById('message').innerHTML = "Video End Event Performed "}
    vid.onpause = function () { document.getElementById('message').innerHTML = "Video Pause Event Performed " }

}
getVideoStaus();

function vid_play() {
    console.log("play button pressed")
    document.getElementById('message').innerHTML = "Play Event Fired"
    vid.play()
}
function vid_pause() {
    console.log("pause method called")
    vid.pause();
    document.getElementById('message').innerHTML = "Video Pause Event Fired";
}

function vid_resume() {
    console.log("resume called")
    vid.play()
    document.getElementById('message').innerHTML = "Video Resume/Play Event Fired";
}
function vid_stop() {
    console.log("stop called and set to zero")
    // vid.exit()
    document.getElementById('message').innerHTML = "Video Stop Event Fired";
    document.getElementById('myVideo').currentTime = 0;

}