// Создаем элементы
const playerContainer = document.createElement("div");
playerContainer.style.background = "linear-gradient(90deg, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 100%)";
playerContainer.style.width = "350px";
playerContainer.style.height = "100px";
playerContainer.style.border = "3px solid white";
playerContainer.style.borderRadius = "13px";
playerContainer.style.display = "flex";
playerContainer.style.position = "fixed";
playerContainer.style.bottom = "20px";
playerContainer.style.left = "20px";

const playerImage = document.createElement("div");
playerImage.style.background = "url('https://i1.sndcdn.com/artworks-000120546175-l4xtt4-t500x500.jpg')";
playerImage.style.backgroundSize = "100px";
playerImage.style.width = "100px";
playerImage.style.height = "100px";
playerImage.style.borderRadius = "9px 0px 0px 9px";

const playerContainerV = document.createElement("div");
playerContainerV.style.display = "flex";
playerContainerV.style.flexDirection = "column";
playerContainerV.style.margin = "0 auto";
playerContainerV.style.width = "220px";
playerContainerV.style.height = "100px";

const playerTrackTitle = document.createElement("div");
playerTrackTitle.style.fontFamily = "Gilroy";
playerTrackTitle.style.fontSize = "20px";
playerTrackTitle.style.marginTop = "15px";
playerTrackTitle.style.marginLeft = "15px";
playerTrackTitle.style.marginBottom = "5px";
playerTrackTitle.textContent = "The Beach";

const playerArtistTitle = document.createElement("div");
playerArtistTitle.style.fontFamily = "Inter";
playerArtistTitle.style.fontSize = "15px";
playerArtistTitle.style.marginBottom = "5px";
playerArtistTitle.style.marginLeft = "15px";
playerArtistTitle.textContent = "The Neighbourhood";

const playerContainerH = document.createElement("div");
playerContainerH.style.display = "flex";
playerContainerH.style.flexDirection = "row";
playerContainerH.style.marginBottom = "auto";

const playerBack = document.createElement("button");
playerBack.style.backgroundRepeat = "no-repeat";
playerBack.style.margin = "0 auto";
playerBack.style.transition = "0.2s";
playerBack.style.backgroundColor = "rgba(0, 0, 0, 0)";
playerBack.style.backgroundImage = "url('Group 3.png')";
playerBack.style.backgroundSize = "40px";
playerBack.style.backgroundPosition = "center";
playerBack.style.width = "40px";
playerBack.style.height = "24px";
playerBack.style.border = "none";

const playerPlay = document.createElement("button");
playerPlay.style.backgroundRepeat = "no-repeat";
playerPlay.style.margin = "0 auto";
playerPlay.style.transition = "0.2s";
playerPlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
playerPlay.style.backgroundImage = "url('Polygon 1.png')";
playerPlay.style.backgroundSize = "22px";
playerPlay.style.backgroundPosition = "center";
playerPlay.style.width = "22px";
playerPlay.style.height = "22px";
playerPlay.style.border = "none";

const playerPause = document.createElement("button");
playerPause.style.backgroundRepeat = "no-repeat";
playerPause.style.margin = "0 auto";
playerPause.style.transition = "0.2s";
playerPause.style.backgroundColor = "rgba(0, 0, 0, 0)";
playerPause.style.backgroundImage = "url('Group 1.png')";
playerPause.style.backgroundSize = "22px";
playerPause.style.backgroundPosition = "center";
playerPause.style.width = "22px";
playerPause.style.height = "22px";
playerPause.style.border = "none";

const playerNext = document.createElement("button");
playerNext.style.backgroundRepeat = "no-repeat";
playerNext.style.margin = "0 auto";
playerNext.style.transition = "0.2s";
playerNext.style.backgroundColor = "rgba(0, 0, 0, 0)";
playerNext.style.backgroundImage = "url('Group 2.png')";
playerNext.style.backgroundSize = "40px";
playerNext.style.backgroundPosition = "center";
playerNext.style.width = "40px";
playerNext.style.height = "24px";
playerNext.style.border = "none";

// Добавляем стили для hover состояния кнопок
playerBack.addEventListener("mouseenter", function() {
  playerBack.style.backgroundImage = "url('hover/Group 3.png')";
});

playerBack.addEventListener("mouseleave", function() {
  playerBack.style.backgroundImage = "url('Group 3.png')";
});

playerPlay.addEventListener("mouseenter", function() {
  playerPlay.style.backgroundImage = "url('hover/Polygon 1.png')";
});

playerPlay.addEventListener("mouseleave", function() {
  playerPlay.style.backgroundImage = "url('Polygon 1.png')";
});

playerPause.addEventListener("mouseenter", function() {
  playerPause.style.backgroundImage = "url('hover/Group 1.png')";
});

playerPause.addEventListener("mouseleave", function() {
  playerPause.style.backgroundImage = "url('Group 1.png')";
});

playerNext.addEventListener("mouseenter", function() {
  playerNext.style.backgroundImage = "url('hover/Group 2.png')";
});

playerNext.addEventListener("mouseleave", function() {
  playerNext.style.backgroundImage = "url('Group 2.png')";
});

// Добавляем стили для active состояния кнопок
playerBack.addEventListener("mousedown", function() {
  playerBack.style.backgroundImage = "url('active/Group 3.png')";
});

playerBack.addEventListener("mouseup", function() {
  playerBack.style.backgroundImage = "url('hover/Group 3.png')";
});

playerPlay.addEventListener("mousedown", function() {
  playerPlay.style.backgroundImage = "url('active/Polygon 1.png')";
});

playerPlay.addEventListener("mouseup", function() {
  playerPlay.style.backgroundImage = "url('hover/Polygon 1.png')";
});

playerPause.addEventListener("mousedown", function() {
  playerPause.style.backgroundImage = "url('active/Group 1.png')";
});

playerPause.addEventListener("mouseup", function() {
  playerPause.style.backgroundImage = "url('hover/Group 1.png')";
});

playerNext.addEventListener("mousedown", function() {
  playerNext.style.backgroundImage = "url('active/Group 2.png')";
});

playerNext.addEventListener("mouseup", function() {
  playerNext.style.backgroundImage = "url('hover/Group 2.png')";
});

// Создаем массив треков
const tracks = [
  {
    title: "Experience",
    artist: "Ludovico Einaudi, Daniel Hope & I Virtuosi Italiani",
    image: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
    audio: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
    playing: false
  },
  {
    title: "Where Is My Mind",
    artist: "Maxence Cyrin",
    image: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
    audio: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
    playing: false
  },
  {
    title: "Pure Imagination",
    artist: "Shiloh",
    image: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
    audio: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",
    playing: false
  },
  {
    title: "The Beach (Instrumental + Slowed + Muffled)",
    artist: "mxpheebz",
    image: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
    audio: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",
    playing: false
  }
];

// Функция изменения трека
function changeTrack(index) {
  const track = tracks[index];
  playerTrackTitle.textContent = track.title;
  playerArtistTitle.textContent = track.artist;
  playerImage.style.backgroundImage = `url('${track.image}')`;
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
playerContainer.appendChild(playerImage);
playerContainer.appendChild(playerContainerV);
playerContainerV.appendChild(playerTrackTitle);
playerContainerV.appendChild(playerArtistTitle);
playerContainerV.appendChild(playerContainerH);
playerContainerH.appendChild(playerBack);
playerContainerH.appendChild(playerPlay);
playerContainerH.appendChild(playerPause);
playerContainerH.appendChild(playerNext);

document.body.appendChild(playerContainer);


// Изначально отображаем первый трек
changeTrack(0);