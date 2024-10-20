var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var playCount = 0;      // Initialize the play count
var maxPlays = 2000000; // Set this to simulate 2 million plays

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'd4Hq50DTFsc',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();  // Start playing the video automatically
    player.mute();             // Mute the video to comply with autoplay policies
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        if (playCount < maxPlays) {
            playCount++;         // Increment the play count
            player.seekTo(0);    // Seek to the beginning of the video
            player.playVideo();   // Replay the video
            console.log("Play count: " + playCount); // Log the play count
        } else {
            console.log("Playback complete. Total simulated plays: " + playCount);
        }
    }
}
