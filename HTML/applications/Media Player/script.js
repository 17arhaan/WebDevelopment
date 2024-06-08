function playMedia(id) {
    var media = document.getElementById(id);
    media.play();
}

function pauseMedia(id) {
    var media = document.getElementById(id);
    media.pause();
}

function setVolume(value) {
    var video = document.getElementById('videoPlayer');
    var audio = document.getElementById('audioPlayer');
    video.volume = value;
    audio.volume = value;
}

function toggleFullscreen(id) {
    var media = document.getElementById(id);
    if (media.requestFullscreen) {
        media.requestFullscreen();
    } else if (media.mozRequestFullScreen) { /* Firefox */
        media.mozRequestFullScreen();
    } else if (media.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        media.webkitRequestFullscreen();
    } else if (media.msRequestFullscreen) { /* IE/Edge */
        media.msRequestFullscreen();
    }
}