function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //will stop the function entirely if it's not on our list
  audio.currentTime = 0; //rewind, otherwise it has to wait until the end to play again
  audio.play();
  key.classList.add('playing');
};

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //only show us transform
  this.classList.remove('playing'); //remove the class
}
const keys = document.querySelectorAll('.key');
// need to use forEach so that you select every key in the array
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
