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
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
