import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const delay = require('lodash.throttle');

let actualTime = localStorage.getItem("timecode") || 0
  
player.on('timeupdate', delay((function (data) {
    localStorage.setItem("timecode", data.seconds)
    }), 1000));

player.setCurrentTime(actualTime)
