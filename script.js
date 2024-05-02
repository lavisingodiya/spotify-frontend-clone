console.log("Welcome to Spotify Clone!");

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");

let songs = [
  { songname: "Sample 1", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
  { songname: "Sample 2", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
  { songname: "Sample 3", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
  { songname: "Sample 4", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
  { songname: "Sample 5", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
  { songname: "Sample 6", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
  { songname: "Sample 7", filepath: "songs/7.mp3", coverpath: "covers/7.jpg" },
  { songname: "Sample 8", filepath: "songs/8.mp3", coverpath: "covers/8.jpg" },
  { songname: "Sample 9", filepath: "songs/9.mp3", coverpath: "covers/9.jpg" },
  {
    songname: "Sample 10",
    filepath: "songs/10.mp3",
    coverpath: "covers/10.jpg",
  },
];

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `${songs[songIndex].filepath}`;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity = 1;
});

document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `${songs[songIndex].filepath}`;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
    });