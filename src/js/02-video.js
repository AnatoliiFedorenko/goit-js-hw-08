import Player from '@vimeo/player/src/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(e => {
    console.log(e.seconds);
    localStorage.setItem('playerTime', e.seconds);
  }, 100)
);
player
  .setCurrentTime(localStorage.getItem('playerTime'))
  .catch(function (error) {
    console.log(error.name);
    console.log(error.message);
  });
