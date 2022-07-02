class MusicPlayer {
  constructor(musicList, index) {
    this.musicList = musicList;
    this.index = index;
  }

  getName() {
    return musicList[index][0];
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
      this.index = musicList.length - 1;
    }
  }
}
