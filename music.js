class Music {
  constructor(title, singer, imagePath, audioPath) {
    this.title = title;
    this.singer = singer;
    this.imagePath = imagePath;
    this.audioPath = audioPath;
  }

  getTitle() {
    return this.title;
  }

  getSinger() {
    return this.singer;
  }

  getImagePath() {
    return this.imagePath;
  }

  getAudioPath() {
    return this.audioPath;
  }
}

let musicList = [
  new Music("Boşver", "Nilüfer", "1.jpeg", "1.mp3"),
  new Music("Bu Da Geçer Mi Sevgilim", "Yalın", "2.jpeg", "2.mp3"),
  new Music("Aramızda Uçurumlar", "Fuat Suna", "3.jpeg", "3.mp3"),
];
