const image = document.querySelector("#music-image");
const audio = document.querySelector("#audio");
const title = document.querySelector(".music-info #title");
const singer = document.querySelector(".music-info #singer");
const slider = document.querySelector(".progress #slider");
const currentTime = document.querySelector(".time-info #current-time");
const songLength = document.querySelector(".time-info #music-length");
const playButton = document.querySelector(".controls #play");
const nextButton = document.querySelector(".controls #next");
const previousButton = document.querySelector(".controls #prev");

let myMusicPlayer = new MusicPlayer(musicList);

displayMusic();

function displayMusic() {
  image.src =
    "img/" + myMusicPlayer.musicList[myMusicPlayer.index].getImagePath();
  audio.src =
    "mp3/" + myMusicPlayer.musicList[myMusicPlayer.index].getAudioPath();
}

function playMusic() {
  audio.classList.add("playing");
  audio.play();
}

function pauseMusic() {
  audio.classList.remove("playing");
  audio.pause();
}

playButton.addEventListener("click", () => {
  if (audio.classList.contains("playing")) {
    isMusicPlaying = true;
  } else {
    isMusicPlaying = false;
  }
  isMusicPlaying ? pauseMusic() : playMusic();
});

nextButton.addEventListener("click", () => {
  myMusicPlayer.next();
  displayMusic();
});

previousButton.addEventListener("click", () => {
  myMusicPlayer.previous();
  displayMusic();
});
