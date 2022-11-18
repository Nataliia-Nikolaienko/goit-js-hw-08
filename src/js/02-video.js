import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(setWatchingTime, 500));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

function setWatchingTime(event) {
    localStorage.setItem("videoplayer-current-time", event.seconds);
};


