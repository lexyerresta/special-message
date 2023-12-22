const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

document.addEventListener('click', function() {
  document.getElementById('audio').play();
});

window.onload = function() {
  var audio = document.getElementById('audio');
  audio.volume = 0.5; // Sets the volume to 50%
  // audio.currentTime = 0.8; // Set to 3 seconds
};

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on 25th December!";
  gif.src =
    "https://media.giphy.com/media/65wE7Exx1eKZGYIP0G/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
  
});