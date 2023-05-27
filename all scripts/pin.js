// Создаем элементы
const playerContainer = document.createElement("div");
// playerContainer.style.background = "linear-gradient(90deg, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 100%)";
playerContainer.style.background = "rgba(237, 243, 250, 1)";
// playerContainer.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/preview.png')";
playerContainer.style.backgroundPosition = "center";
playerContainer.style.backgroundSize = "400px";
playerContainer.style.width = "400px";
playerContainer.style.height = "400px";
// playerContainer.style.border = "3px solid white";
playerContainer.style.borderRadius = "25px";
// playerContainer.style.display = "flex";
playerContainer.style.position = "fixed";
playerContainer.style.bottom = "20px";
playerContainer.style.left = "20px";

const playerImage = document.createElement("div");
// playerImage.style.background = "url('https://i1.sndcdn.com/artworks-000120546175-l4xtt4-t500x500.jpg')";
playerImage.style.backgroundColor = 'rgba(0, 0, 0, 1)';
playerImage.style.backgroundPosition = "center";
playerImage.style.backgroundSize = "400px";
playerImage.style.width = "400px";
playerImage.style.height = "264px";
// playerImage.style.opacity = "0.2";
// playerImage.style.borderRadius = "9px 0px 0px 9px";
playerImage.style.borderRadius = "24px 24px 0px 0px";

const playerImageContainer = document.createElement("div");
// playerImageContainer.style.background = "rgba(255, 255, 255, 0.2)";
// playerImage.style.backgroundPosition = "center";
// playerImage.style.backgroundSize = "400px";
playerImageContainer.style.width = "400px";
playerImageContainer.style.height = "264px";
playerImageContainer.style.position = "absolute";
playerImageContainer.style.top = "0px";
// playerImage.style.opacity = "0.2";
// playerImage.style.borderRadius = "9px 0px 0px 9px";
playerImageContainer.style.borderRadius = "24px 24px 0px 0px";

const playerImage2 = document.createElement("div");
// playerImage2.style.background = "url('https://i1.sndcdn.com/artworks-000120546175-l4xtt4-t500x500.jpg')";
playerImage2.style.backgroundColor = 'rgba(0, 0, 0, 1)';
playerImage2.style.backgroundPosition = "center";
playerImage2.style.marginLeft = "30px";
playerImage2.style.top = "151px";
playerImage2.style.position = "absolute";
playerImage2.style.backgroundSize = "153px";
playerImage2.style.width = "153px";
playerImage2.style.height = "153px";
// playerImage2.style.opacity = "0.5";
// playerImage2.style.borderRadius = "9px 0px 0px 9px";
playerImage2.style.borderRadius = "15px";

const playerContainerV = document.createElement("div");
playerContainerV.style.display = "flex";
playerContainerV.style.position = "absolute";
playerContainerV.style.flexDirection = "column";
playerContainerV.style.top = "150px";
playerContainerV.style.left = "180px";
// playerContainerV.style.width = "220px";
playerContainerV.style.height = "100px";

const playerTrackTitle = document.createElement("div");
playerTrackTitle.style.fontFamily = "Gilroy";
playerTrackTitle.style.fontSize = "15px";
playerTrackTitle.style.marginTop = "6px";
playerTrackTitle.style.marginLeft = "22px";
playerTrackTitle.style.marginBottom = "0px";
playerTrackTitle.textContent = "The Beach";

const playerArtistTitle = document.createElement("div");
playerArtistTitle.style.fontFamily = "Gilroy";
playerArtistTitle.style.fontSize = "15px";
playerArtistTitle.style.marginBottom = "5px";
playerArtistTitle.style.marginLeft = "22px";
playerArtistTitle.style.opacity = "0.5";
playerArtistTitle.textContent = "The Neighbourhood";

const playerContainerH = document.createElement("div");
playerContainerH.style.display = "flex";
playerContainerH.style.flexDirection = "row";
playerContainerH.style.marginBottom = "auto";
// playerContainerH.style.width = "198px";
playerContainerH.style.position = "absolute";
playerContainerH.style.right = "15px";
// playerContainerH.style.bottom = "115px";



const currentTimeLabel = document.createElement("span");
currentTimeLabel.textContent = "0:00";
currentTimeLabel.style.marginRight = "10px";

const durationLabel = document.createElement("span");
durationLabel.textContent = "0:00";

const controlsContainer = document.createElement("div");
controlsContainer.style.display = "flex";
controlsContainer.style.marginTop = "20px";



const playerBack = document.createElement("button");
playerBack.style.backgroundRepeat = "no-repeat";
// playerBack.style.opacity = "0.5";
playerBack.style.position = "absolute";
playerBack.style.right = "100px";
playerBack.style.top = "-19px";
playerBack.style.transition = "0.2s";
playerBack.style.backgroundColor = "rgba(0, 0, 0, 0)";
playerBack.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/back/back.png')";
playerBack.style.backgroundSize = "36px";
playerBack.style.borderRadius = "999px";
playerBack.style.backgroundPosition = "center";
playerBack.style.width = "36px";
playerBack.style.height = "36px";
playerBack.style.borderRadius = "999px";
playerBack.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.25)";
playerBack.style.border = "none";

const playerPlay = document.createElement("button");
playerPlay.style.position = "absolute";
playerPlay.style.right = "150px";
playerPlay.style.backgroundRepeat = "no-repeat";
playerPlay.style.margin = "0 auto";
playerPlay.style.top = "-24px";
playerPlay.style.right = "140px";
playerPlay.style.transition = "0.2s";
playerPlay.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/play/play.png')";
playerPlay.style.backgroundSize = "45px";
playerPlay.style.backgroundPosition = "center";
playerPlay.style.width = "45px";
playerPlay.style.height = "45px";
playerPlay.style.border = "none";
playerPlay.style.borderRadius = "999px";
playerPlay.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.25)";

const playerPause = document.createElement("button");
playerPause.style.position = "absolute";
playerPause.style.backgroundRepeat = "no-repeat";
playerPause.style.margin = "0 auto";
playerPause.style.transition = "0.2s";
playerPause.style.backgroundColor = "rgba(0, 0, 0, 0)";
playerPause.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/pause/pause.png')";
playerPause.style.backgroundSize = "45px";
playerPause.style.backgroundPosition = "center";
playerPause.style.top = "-24px";
playerPause.style.right = "140px";
playerPause.style.width = "45px";
playerPause.style.height = "45px";
playerPause.style.borderRadius = "999px";
playerPause.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.25)";
playerPause.style.border = "none";

const playerNext = document.createElement("button");
playerNext.style.backgroundRepeat = "no-repeat";
playerNext.style.position = "absolute";
playerNext.style.right = "60px";
playerNext.style.top = "-19px";
playerNext.style.transition = "0.2s";
playerNext.style.backgroundColor = "rgba(0, 0, 0, 0)";
playerNext.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/next/next.png')";
playerNext.style.backgroundSize = "36px";
playerNext.style.backgroundPosition = "center";
playerNext.style.width = "36px";
playerNext.style.height = "36px";
playerNext.style.borderRadius = "999px";
playerNext.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.25)";
playerNext.style.border = "none";
// 
// Создаем полосу промотки
const playerSeekBar = document.createElement("div");
playerSeekBar.type = "range";
playerSeekBar.min = "0";
playerSeekBar.max = "100";
playerSeekBar.value = "0";
playerSeekBar.style.width = "339px";
playerSeekBar.style.bottom = "70px";
playerSeekBar.style.left = "28px";
playerSeekBar.style.appearance = "none";
playerSeekBar.style.height = "5px";
playerSeekBar.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.25)";
playerSeekBar.style.background = "rgba(255, 255, 255, 1)";
playerSeekBar.style.outline = "none";
playerSeekBar.style.borderRadius = "999px";
playerSeekBar.style.cursor = "pointer";
playerSeekBar.style.position = "absolute";
playerSeekBar.style.display = "flex";

// Добавляем обработчик события изменения значения полосы промотки
playerSeekBar.addEventListener("input", function(event) {
  const seekValue = event.target.value;
  const currentTrack = tracks.find(track => track.playing);
  if (currentTrack) {
    const seekTime = (currentTrack.audio.duration * seekValue) / 100;
    currentTrack.audio.currentTime = seekTime;
    updateIndicatorWidth(seekValue); // Обновляем ширину индикатора
  }
});

// Добавляем обработчики событий для изменения высоты слайдера при наведении мыши
playerSeekBar.addEventListener('mouseenter', function() {
  playerSeekBar.style.height = '10px';
  playerSeekBar.style.transition = '0.2s';
  indicator.style.transition = '0.2s';
  indicator.style.height = '10px';
});

playerSeekBar.addEventListener('mouseleave', function() {
  playerSeekBar.style.height = '5px';
  playerSeekBar.style.transition = '0.2s';
  indicator.style.transition = '0.2s';
  indicator.style.height = '5px';
});

// Создаем элемент индикатора
const indicator = document.createElement("div");
indicator.style.width = "0%";
indicator.style.height = "100%";
indicator.style.background = "rgba(55, 60, 69, 1)";
indicator.style.borderRadius = "999px";

// Добавляем индикатор в полосу промотки
playerSeekBar.appendChild(indicator);

// Добавляем полосу промотки в контейнер слайдера
playerContainer.appendChild(playerSeekBar);

// Функция для обновления ширины индикатора
function updateIndicatorWidth(percent) {
  indicator.style.width = percent + "%";
}

// Обработчик события клика на полосе промотки
playerSeekBar.addEventListener("click", function(event) {
 const seekPosition = event.offsetX / playerSeekBar.clientWidth;
  const currentTrack = tracks.find(track => track.playing);
  if (currentTrack) {
    const seekTime = currentTrack.audio.duration * seekPosition;
    currentTrack.audio.currentTime = seekTime;
    updateIndicatorWidth(seekPosition * 100); // Обновляем ширину индикатора
  }
});

let seekBarPosition;

// Функция для обновления положения индикатора на основе текущего времени воспроизведения
function updateIndicatorPosition(currentTime, duration) {
  const percent = (currentTime / duration) * 100;
  playerSeekBar.value = percent;
  // updateIndicatorWidth(percent);
}

// Пример использования функции обновления положения индикатора
var currentTime = 30; // Текущее время воспроизведения (в секундах)
var duration = 120; // Общая продолжительность (в секундах)
updateIndicatorPosition(currentTime, duration);


// 
// Добавляем стили для hover состояния кнопок
playerBack.addEventListener("mouseenter", function() {
  playerBack.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/back/back_hover.png')";
});

playerBack.addEventListener("mouseleave", function() {
  playerBack.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/back/back.png')";
});

playerPlay.addEventListener("mouseenter", function() {
  playerPlay.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/play/play_hover.png')";
});

playerPlay.addEventListener("mouseleave", function() {
  playerPlay.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/play/play.png')";
});

playerPause.addEventListener("mouseenter", function() {
  playerPause.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/pause/pause_hover.png')";
});

playerPause.addEventListener("mouseleave", function() {
  playerPause.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/pause/pause.png')";
});

playerNext.addEventListener("mouseenter", function() {
  playerNext.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/next/next_hover.png')";
});

playerNext.addEventListener("mouseleave", function() {
  playerNext.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/next/next.png')";
});

// Добавляем стили для active состояния кнопок
playerBack.addEventListener("mousedown", function() {
  playerBack.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/back/back_active.png')";
});

playerBack.addEventListener("mouseup", function() {
  playerBack.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/back/back.png')";
});

playerPlay.addEventListener("mousedown", function() {
  playerPlay.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/play/play_active.png')";
});

playerPlay.addEventListener("mouseup", function() {
  playerPlay.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/play/play.png";
});

playerPause.addEventListener("mousedown", function() {
  playerPause.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/pause/pause_active.png";
});

playerPause.addEventListener("mouseup", function() {
  playerPause.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/pause/pause.png')";
});

playerNext.addEventListener("mousedown", function() {
  playerNext.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/next/next_active.png')";
});

playerNext.addEventListener("mouseup", function() {
  playerNext.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/next/next.png')";
});

// Создаем массив треков
const tracks = [
  {
    title: "Experience",
    artist: "Ludovico Einaudi, Daniel Hope & I Virtuosi Italiani",
    image: "https://administrati0n.github.io/data-one/player/img/blured/Experience.png",
    image2: "https://administrati0n.github.io/data-one/player/img/logo/Experience.jpg",
    audio: "https://administrati0n.github.io/data-one/player/music/Experience.mp3",
    playing: false
  },
  {
    title: "Where Is My Mind",
    artist: "Maxence Cyrin",
    image: "https://administrati0n.github.io/data-one/player/img/blured/Where Is My Mind.png",
    image2: "https://administrati0n.github.io/data-one/player/img/logo/Where Is My Mind.jpeg",
    audio: "https://administrati0n.github.io/data-one/player/music/Where Is My Mind.mp3",
    playing: false
  },
  {
    title: "Pure Imagination",
    artist: "Shiloh",
    image: "https://administrati0n.github.io/data-one/player/img/blured/Pure Imagination.png",
    image2: "https://administrati0n.github.io/data-one/player/img/logo/Pure Imagination.jpeg",
    audio: "https://administrati0n.github.io/data-one/player/music/Pure Imagination.mp3",
    playing: false
  },
  {
    title: "The Beach (Instrumental + Slowed + Muffled)",
    artist: "mxpheebz",
    image: "https://administrati0n.github.io/data-one/player/img/blured/The Beach.png",
    image2: "https://administrati0n.github.io/data-one/player/img/logo/The Beach.jpg",
    audio: "https://administrati0n.github.io/data-one/player/music/The Beach.mp3",
    playing: false
  }
];

// Функция для обновления времени воспроизведения на метке
function updateTimeLabel(label, time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  label.textContent = formattedTime;
}



// Пример использования функции обновления времени
// const currentTime = 30; // Текущее время воспроизведения в секундах
// const duration = 120; // Общая продолжительность трека в секундах
// updateTimeLabel(currentTimeLabel, currentTime);
updateTimeLabel(durationLabel, duration);

// playerContainer.appendChild(currentTimeLabel);
playerContainer.appendChild(playerSeekBar);
// playerContainer.appendChild(durationLabel);
// playerContainer.appendChild(controlsContainer);



// Функция изменения трека
function changeTrack(index) {
  const track = tracks[index];
  playerTrackTitle.textContent = track.title;
  playerArtistTitle.textContent = track.artist;
  playerImage.style.backgroundImage = `url('${track.image}')`;
  playerImage2.style.backgroundImage = `url('${track.image2}')`;
  if (!track.playing) {
    return; // Если трек не должен быть воспроизведен, прекращаем выполнение функции
  }
  // Проверяем состояние воспроизведения трека
  if (track.playing) {
    playerPlay.style.display = "none";
    playerPause.style.display = "block";
  } else {
    playerPlay.style.display = "block";
    playerPause.style.display = "none";
  }

  // Приостанавливаем и сбрасываем в начало предыдущий трек
  const currentTrack = tracks.find(track => track.playing);
  if (currentTrack && currentTrack !== track) {
    currentTrack.playing = false;
    currentTrack.audio.pause();
    currentTrack.audio.currentTime = 0;
  }

  // Воспроизводим текущий трек
  track.playing = true;
  track.audio.play().catch(error => {
    // Обрабатываем ошибку воспроизведения
    console.error("Failed to play audio:", error);
  });
}

// Обработчик события для кнопки playerPlay
playerPlay.addEventListener("click", function() {
  const currentTrack = tracks.find(track => track.playing);
  if (currentTrack) {
    currentTrack.playing = false;
    currentTrack.audio.pause(); // Приостанавливаем текущий трек
  }
  
  const newTrack = tracks.find(track => track.title === playerTrackTitle.textContent);
  newTrack.playing = true;
  newTrack.audio.play(); // Воспроизводим новый трек

  // Скрываем кнопку playerPlay
  playerPlay.style.display = "none";
  // Отображаем кнопку playerPause
  playerPause.style.display = "block";
});

// Обработчик события для кнопки playerPause
playerPause.addEventListener("click", function() {
  const currentTrack = tracks.find(track => track.playing);
  if (currentTrack) {
    currentTrack.playing = false;
    currentTrack.audio.pause(); // Приостанавливаем текущий трек
  }

  // Скрываем кнопку playerPause
  playerPause.style.display = "none";
  // Отображаем кнопку playerPlay
  playerPlay.style.display = "block";
});

// Изначально скрываем кнопку playerPause
playerPause.style.display = "none";

// Создаем объекты аудио для каждого трека
tracks.forEach(track => {
  track.audio = new Audio(track.audio); // Создаем объект аудио
  track.audio.addEventListener("ended", function() {
    // Событие "ended" возникает, когда трек закончился
    // Переходим к следующему треку
    const currentIndex = tracks.findIndex(t => t.title === track.title);
    const nextIndex = (currentIndex + 1) % tracks.length;
    changeTrack(nextIndex);
  });
});



// Обработчик события для кнопки playerPause
playerPause.addEventListener("click", function() {
  // Скрываем кнопку playerPause
  playerPlay.style.display = "block";
  // Отображаем кнопку playerPlay
  playerPause.style.display = "none";
});

// Изначально скрываем кнопку playerPause
playerPause.style.display = "none";

// Обработчик события для кнопки playerBack
playerBack.addEventListener("click", function() {
  // Получаем индекс текущего трека
  const currentIndex = tracks.findIndex(track => track.title === playerTrackTitle.textContent);
  // Вычисляем индекс предыдущего трека
  const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
  // Изменяем трек и изображение
  changeTrack(prevIndex);
});

// Обработчик события для кнопки playerNext
playerNext.addEventListener("click", function() {
  // Получаем индекс текущего трека
  const currentIndex = tracks.findIndex(track => track.title === playerTrackTitle.textContent);
  // Вычисляем индекс следующего трека
  const nextIndex = (currentIndex + 1) % tracks.length;
  // Изменяем трек и изображение
  changeTrack(nextIndex);

});

// Добавляем элементы в DOM
playerSeekBar.appendChild(indicator);
playerContainer.appendChild(playerImage);
playerContainer.appendChild(playerImageContainer);
playerContainer.appendChild(playerSeekBar);
playerImageContainer.appendChild(playerImage2);
playerImageContainer.appendChild(playerContainerV);
playerContainerV.appendChild(playerTrackTitle);
playerContainerV.appendChild(playerArtistTitle);
playerContainer.appendChild(playerContainerH);
playerContainerH.appendChild(playerPause);
playerContainerH.appendChild(playerPlay);
playerContainerH.appendChild(playerBack);
playerContainerH.appendChild(playerNext);
document.body.appendChild(playerContainer);


// Изначально отображаем первый трек
changeTrack(0);