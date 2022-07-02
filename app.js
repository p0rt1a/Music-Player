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
const volumeSlider = document.querySelector("#volume-slider");
const volumeButton = document.querySelector("#volume-button");
const musicListButton = document.querySelector("#list-button");
const musicListSection = document.querySelector(".music-list");

let myMusicPlayer = new MusicPlayer(musicList);

window.addEventListener("load", () => {
  displayMusic();
  loadMusicList(musicList);
});

function displayMusic() {
  title.innerHTML = myMusicPlayer.musicList[myMusicPlayer.index].getTitle();
  singer.innerHTML = myMusicPlayer.musicList[myMusicPlayer.index].getSinger();
  image.src =
    "img/" + myMusicPlayer.musicList[myMusicPlayer.index].getImagePath();
  audio.src =
    "mp3/" + myMusicPlayer.musicList[myMusicPlayer.index].getAudioPath();
}

function playMusic() {
  audio.classList.add("playing");
  playButton.classList = "fa-solid fa-pause";
  audio.play();
}

function pauseMusic() {
  audio.classList.remove("playing");
  playButton.classList = "fa-solid fa-play";
  audio.pause();
}

function calculateTime(sec) {
  const minute = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60);
  const time = seconds < 10 ? `${minute}:0${seconds}` : `${minute}:${seconds}`;
  return time;
}

audio.addEventListener("loadedmetadata", () => {
  songLength.textContent = calculateTime(audio.duration);
  slider.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  slider.value = Math.floor(audio.currentTime);
  currentTime.textContent = calculateTime(slider.value);
});

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
  playMusic();
});

previousButton.addEventListener("click", () => {
  myMusicPlayer.previous();
  displayMusic();
  playMusic();
});

volumeButton.addEventListener("click", () => {
  if (audio.muted) {
    audio.muted = false;
    volumeButton.classList = "fa-solid fa-volume-high";
  } else if (!audio.muted) {
    audio.muted = true;
    volumeButton.classList = "fa-solid fa-volume-xmark";
  }
});

volumeSlider.addEventListener("input", (e) => {
  audio.volume = e.target.value / 100;
  if (audio.volume == 0) {
    volumeButton.classList = "fa-solid fa-volume-xmark";
  } else {
    volumeButton.classList = "fa-solid fa-volume-high";
  }
});

function loadMusicList(list) {
  for (let i = 0; i < list.length; i++) {
    let item = `
      <div class="music-list-item">
      <audio class="music-${i}" src="mp3/${list[i].getAudioPath()}"></audio>
        <span>${list[i].getTitle()} - ${list[i].getSinger()}</span>
        <span id="music-${i}"></span>
      </div>
    `;

    musicListSection.insertAdjacentHTML("beforeend", item);

    let songDuration = musicListSection.querySelector(`#music-${i}`);
    let myAudio = musicListSection.querySelector(`.music-${i}`);

    myAudio.addEventListener("loadeddata", () => {
      songDuration.innerText = calculateTime(myAudio.duration);
    });
  }
}
