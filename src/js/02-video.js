import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(setWatchingTime, 500));

player.setCurrentTime(localStorage.getItem(STORAGE_KEY));

function setWatchingTime(event) {
    localStorage.setItem(STORAGE_KEY, event.seconds);
};


