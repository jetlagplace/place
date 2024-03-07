function createVideoPlayer(videoId) {
    window.videoId = videoId;
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
    videoId: window.videoId,
    playerVars: {
        'playsinline': 1
    },
    events: {
        'onReady': onPlayerReady
    }
    });
}

function onPlayerReady(event) {
    setInterval(refreshLocations, 500)
}