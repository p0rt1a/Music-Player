class MusicPlayer {
  constructor(musicList) {
    this.musicList = musicList;
    this.index = 0;
  }

  getName() {
    return this.musicList[this.index];
  }

  next() {
    this.index++;
    if (this.index >= musicList.length) {
      this.index = 0;
    }
  }

  previous() {
    this.index--;
    if (this.index < 0) {
      this.index = this.musicList.length - 1;
    }
  }
}
