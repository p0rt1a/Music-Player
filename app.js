const image = document.querySelector("#music-image");
const audio = document.querySelector("#audio");
const title = document.querySelector(".music-info #title");
const singer = document.querySelector(".music-info #singer");
const slider = document.querySelector(".progress #slider");
const currentTime = document.querySelector(".time-info #current-time");
const songLength = document.querySelector(".time-info #music-length");
const play = document.querySelector(".controls #play");

let myMusicPlayer = new MusicPlayer(musicList);

displayMusic();

function displayMusic() {
  image.src =
    "img/" + myMusicPlayer.musicList[myMusicPlayer.index].getImagePath();
  audio.src =
    "mp3/" + myMusicPlayer.musicList[myMusicPlayer.index].getAudioPath();
}

play.addEventListener("click", () => {
  audio.play();
});
