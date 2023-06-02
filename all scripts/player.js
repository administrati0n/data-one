// Создаем элементы
const frame = document.createElement('div');
const frameBg = document.createElement('div');
const bgColor = document.createElement('div');
const bgBlack = document.createElement('div');

frame.className = 'frame';
frameBg.className = 'frame-bg';
bgColor.className = 'bg-color album-artwork';
bgBlack.className = 'bg-black album-artwork';

bgColor.style.backgroundSize = 'cover'; // Или другой вариант: 'contain', 'auto', '100%', '50%', и т.д.
bgBlack.style.backgroundSize = 'cover';
bgColor.style.width = '600px';
bgColor.style.height = '600px';
bgBlack.style.width = '600px';
bgBlack.style.height = '600px';

bgColor.src = 'https://administrati0n.github.io/data-one/player/img/logo/Pure Imagination.jpeg';
bgBlack.src = 'https://administrati0n.github.io/data-one/player/img/logo/Pure Imagination.jpeg';


frameBg.appendChild(bgColor);
frameBg.appendChild(bgBlack);

frame.appendChild(frameBg);

frame.style.display = 'flex';
frame.style.flexDirection = 'column';
frame.style.width = '300px';
frame.style.height = '550px';
frame.style.overflow = 'hidden';
frame.style.position = 'fixed';
frame.style.left = '100px';
frame.style.bottom = '-1000px';
frame.style.color = 'white';
frame.style.margin = '2em';
frame.style.background = 'black';
frame.style.paddingTop = '2em';
frame.style.borderRadius = '2em';
frame.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.75), 0 8px 30px rgba(0, 0, 0, 0.5)';

const frameBefore = document.createElement('div');
frameBefore.style.content = '""';
frameBefore.style.display = 'block';
frameBefore.style.width = '4em';
frameBefore.style.height = '0.6em';
frameBefore.style.background = 'white';
frameBefore.style.margin = '0 auto';
frameBefore.style.zIndex = '10';
frameBefore.style.borderRadius = '10em';
frameBefore.style.mixBlendMode = 'overlay';
frame.insertBefore(frameBefore, frame.firstChild);

const frameHeader = document.createElement('div');
frameHeader.className = 'frame-header';
frameHeader.style.position = 'relative';
frameHeader.style.zIndex = '10';
frameHeader.style.display = 'flex';
frameHeader.style.flexShrink = '0';
frameHeader.style.alignItems = 'center';
frameHeader.style.padding = '2rem';
// frame.insertBefore(frameHeader, frame.firstChild);

const imageContainer = document.createElement('div');
imageContainer.className = 'image';
frameHeader.appendChild(imageContainer);

const image = document.createElement('img');
image.src = 'https://administrati0n.github.io/data-one/player/img/logo/Experience.jpg';
image.style.width = '50px';
image.style.borderRadius = '0.5em';
image.style.boxShadow = '0 3px 30px rgba(0, 0, 0, 0.2), 0 3px 10px rgba(0, 0, 0, 0.4)';
// imageContainer.appendChild(image);

const infoContainer = document.createElement('div');
infoContainer.className = 'info';
frameHeader.appendChild(infoContainer);

const title = document.createElement('div');
title.className = 'title';
title.innerText = 'Title';
title.style.fontSize = '1.8rem';
infoContainer.appendChild(title);

const subtitle = document.createElement('div');
subtitle.className = 'subtitle';
subtitle.innerText = 'Subtitle';
subtitle.style.fontSize = '1.2rem';
subtitle.style.marginTop = '0.25em';
// infoContainer.appendChild(subtitle);

const lyrics = document.createElement('div');
lyrics.className = 'frame-lyrics';
lyrics.style.position = 'relative';
lyrics.style.zIndex = '10';
lyrics.style.flexGrow = '1';
// lyrics.style.padding = '2rem';
lyrics.style.paddingTop = '0';
lyrics.style.fontSize = '2rem';
lyrics.style.overflowY = 'auto';
frame.appendChild(lyrics);

const lyricsText1 = document.createElement('div');
lyricsText1.innerText = 'Lyrics Text 1';
lyricsText1.style.color = 'rgba(255, 255, 255, 0.75)';
// lyrics.appendChild(lyricsText1);

const lyricsText2 = document.createElement('div');
lyricsText2.innerText = 'Lyrics Text 2';
lyricsText2.style.color = 'rgba(255, 255, 255, 0.75)';
lyricsText2.style.marginTop = '1.4em';
// lyrics.appendChild(lyricsText2);

const lyricsText3 = document.createElement('div');
lyricsText3.innerText = 'Lyrics Text 3';
lyricsText3.className = 'active';
lyricsText3.style.color = 'white';
lyricsText3.style.fontSize = '3rem';
lyricsText3.style.marginTop = '0.8em';
// lyrics.appendChild(lyricsText3);

const lyricsText4 = document.createElement('div');
lyricsText4.innerText = 'Lyrics Text 4';
lyricsText4.style.color = 'rgba(255, 255, 255, 0.75)';
lyricsText4.style.filter = 'blur(0.05px)';
// lyrics.appendChild(lyricsText4);

const frameBgStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: '0',
  overflow: 'hidden',
  borderRadius: '2em'
};

for (const prop in frameBgStyle) {
  frameBg.style[prop] = frameBgStyle[prop];
}

const bgColorStyle = {
  width: '200%',
  left: '-300px',
  position: 'absolute',
  filter: 'blur(40px)',
  // borderRadius: '100em',
  animation: 'rotate 35s linear infinite'
};

for (const prop in bgColorStyle) {
  bgColor.style[prop] = bgColorStyle[prop];
}

const bgBlackStyle = {
  left: '0',
  bottom: '0',
  filter: 'blur(40px)',
  zIndex: '1',
  animation: 'rotate1 35s linear infinite'
  // animationDirection: 'reverse',
  // animationDelay: '10s'
};

for (const prop in bgBlackStyle) {
  bgBlack.style[prop] = bgBlackStyle[prop];
}

const rotateKeyframes = `
@-webkit-keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes rotate1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes rotate1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
`;

const rotateKeyframes1 = `

`;



const style = document.createElement('style');
style.appendChild(document.createTextNode(rotateKeyframes));
document.head.appendChild(style);

// Добавьте созданный фрейм в DOM, куда вам нужно.

















frameBefore.addEventListener("click", function() {
if(frame.style.bottom == "20px"){
frame.style.bottom = "-1000px";
frame.style.transition = "0.3s";
leftBarMNote.style.backgroundImage = "url('https://administrati0n.github.io/data-one/leftBar/MNote/ignore.png')";
leftBarMNoteC.style.display = "flex";
}else{
leftBarMNoteC.style.display = "none";
frame.style.bottom = "20px";
frame.style.transition = "0.3s";
leftBarMNote.style.backgroundImage = "url('https://administrati0n.github.io/data-one/leftBar/MNote/active.png')";
}
});



































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
// playerImageContainer.style.width = "400px";
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
playerImage2.style.marginTop = "20px";
playerImage2.style.marginLeft = "20px";
playerImage2.style.top = "0px";
playerImage2.style.position = "absolute";
playerImage2.style.backgroundSize = "280px";
playerImage2.style.width = "260px";
playerImage2.style.height = "260px";
playerImage2.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.5)";
// playerImage2.style.opacity = "0.5";
// playerImage2.style.borderRadius = "9px 0px 0px 9px";
playerImage2.style.borderRadius = "15px";

const playerContainerV = document.createElement("div");
playerContainerV.style.display = "flex";
playerContainerV.style.position = "absolute";
playerContainerV.style.flexDirection = "column";
playerContainerV.style.top = "300px";
playerContainerV.style.left = "0px";
playerContainerV.style.width = "220px";
playerContainerV.style.height = "100px";

const playerTrackTitle = document.createElement("div");
playerTrackTitle.style.fontFamily = "Gilroy";
playerTrackTitle.style.fontSize = "15px";
playerTrackTitle.style.marginTop = "6px";
playerTrackTitle.style.marginLeft = "22px";
playerTrackTitle.style.marginBottom = "0px";
playerTrackTitle.style.whiteSpace = "nowrap";
playerTrackTitle.style.overflow = "hidden";
playerTrackTitle.style.textOverflow = "ellipsis";
playerTrackTitle.textContent = "The Beach";


const playerArtistTitle = document.createElement("div");
playerArtistTitle.style.fontFamily = "Gilroy";
playerArtistTitle.style.fontSize = "15px";
playerArtistTitle.style.marginBottom = "5px";
playerArtistTitle.style.marginLeft = "22px";
playerArtistTitle.style.opacity = "0.5";
playerArtistTitle.style.whiteSpace = "nowrap";
playerArtistTitle.style.overflow = "hidden";
playerArtistTitle.style.textOverflow = "ellipsis";
playerArtistTitle.textContent = "The Neighbourhood";


const playerContainerH = document.createElement("div");
playerContainerH.style.display = "flex";
playerContainerH.style.flexDirection = "row";
playerContainerH.style.marginBottom = "auto";
// playerContainerH.style.width = "198px";
playerContainerH.style.position = "absolute";
playerContainerH.style.right = "15px";
// playerContainerH.style.bottom = "115px";



const currentTimeLabel = document.createElement("div");
const timeLabel = document.createElement("div");
timeLabel.style.fontSize = "15px";
timeLabel.style.fontFamily = "Gilroy";
timeLabel.textContent = "0:00";
timeLabel.style.position = "absolute";
timeLabel.style.top = "380px";
timeLabel.style.left = "25px";
timeLabel.style.opacity = "0.5";

const durationLabel = document.createElement("span");
durationLabel.style.fontSize = "15px";
durationLabel.style.fontFamily = "Gilroy";
durationLabel.textContent = "";
durationLabel.style.position = "absolute";
durationLabel.style.top = "380px";
durationLabel.style.opacity = "0.5";
durationLabel.style.right = "25px";

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
playerBack.style.boxShadow = "0px 5px 10px rgba(255, 255, 255, 0.25)";
playerBack.style.border = "none";

const playerPlay = document.createElement("button");
playerPlay.style.position = "absolute";
playerPlay.style.right = "150px";
playerPlay.style.backgroundRepeat = "no-repeat";
playerPlay.style.margin = "0 auto";
playerPlay.style.top = "415px";
playerPlay.style.right = "115px";
playerPlay.style.transition = "0.3s";
playerPlay.style.backgroundColor = "rgba(255, 255, 255, 0)";
// playerPlay.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/play/play.png')";
playerPlay.style.backgroundSize = "45px";
playerPlay.style.backgroundPosition = "center";
playerPlay.style.width = "45px";
playerPlay.style.height = "45px";
playerPlay.style.border = "none";
playerPlay.style.borderRadius = "999px";
// playerPlay.style.boxShadow = "0px 5px 10px rgba(255, 255, 255, 0.25)";

const playerPlay1 = document.createElement("div");
playerPlay1.style.position = "absolute";
playerPlay1.style.left = "11px";
playerPlay1.style.backgroundRepeat = "no-repeat";
playerPlay1.style.margin = "0 auto";
playerPlay1.style.top = "10px";
playerPlay1.style.right = "30px";
playerPlay1.style.transition = "0.3s";
playerPlay1.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay1.style.backgroundSize = "45px";
playerPlay1.style.backgroundPosition = "center";
playerPlay1.style.width = "10px";
playerPlay1.style.height = "26px";
playerPlay1.style.border = "none";
playerPlay1.style.borderRadius = "999px";


const playerPlay2 = document.createElement("div");
playerPlay2.style.position = "absolute";
playerPlay2.style.right = "17px";
playerPlay2.style.backgroundRepeat = "no-repeat";
playerPlay2.style.margin = "0 auto";
playerPlay2.style.top = "14px";
playerPlay2.style.right = "17px";
playerPlay2.style.transition = "0.3s";
playerPlay2.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay2.style.backgroundSize = "45px";
playerPlay2.style.backgroundPosition = "center";
playerPlay2.style.width = "10px";
playerPlay2.style.height = "26px";
playerPlay2.style.border = "none";
playerPlay2.style.borderRadius = "999px";
playerPlay2.style.rotate = "60deg";

const playerPlay3 = document.createElement("div");
playerPlay3.style.position = "absolute";
playerPlay3.style.right = "17px";
playerPlay3.style.backgroundRepeat = "no-repeat";
playerPlay3.style.margin = "0 auto";
playerPlay3.style.top = "6px";
playerPlay3.style.right = "17px";
playerPlay3.style.transition = "0.3s";
playerPlay3.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay3.style.backgroundSize = "45px";
playerPlay3.style.backgroundPosition = "center";
playerPlay3.style.width = "10px";
playerPlay3.style.height = "26px";
playerPlay3.style.border = "none";
playerPlay3.style.borderRadius = "999px";
playerPlay3.style.rotate = "-60deg";

const playerPlay4 = document.createElement("div");
playerPlay4.style.position = "absolute";
playerPlay4.style.left = "20px";
playerPlay4.style.backgroundRepeat = "no-repeat";
playerPlay4.style.margin = "0 auto";
playerPlay4.style.top = "13px";
playerPlay4.style.right = "15px";
playerPlay4.style.transition = "0.3s";
playerPlay4.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay4.style.backgroundSize = "45px";
playerPlay4.style.backgroundPosition = "center";
playerPlay4.style.width = "10px";
playerPlay4.style.height = "19px";
playerPlay4.style.border = "none";
playerPlay4.style.borderRadius = "999px";


const playerPlay5 = document.createElement("div");
playerPlay5.style.position = "absolute";
playerPlay5.style.left = "25px";
playerPlay5.style.backgroundRepeat = "no-repeat";
playerPlay5.style.margin = "0 auto";
playerPlay5.style.top = "18px";
playerPlay5.style.right = "30px";
playerPlay5.style.transition = "0.3s";
playerPlay5.style.backgroundColor = "rgba(255, 255, 255, 1)";
playerPlay5.style.backgroundSize = "45px";
playerPlay5.style.backgroundPosition = "center";
playerPlay5.style.width = "10px";
playerPlay5.style.height = "9px";
playerPlay5.style.border = "none";
playerPlay5.style.borderRadius = "999px";

const playerPause = document.createElement("button");
playerPause.style.position = "absolute";
playerPause.style.backgroundRepeat = "no-repeat";
playerPause.style.margin = "0 auto";
playerPause.style.transition = "0.2s";
playerPause.style.backgroundColor = "rgba(62, 62, 62, 1)";
playerPause.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/pause/pause.png')";
playerPause.style.backgroundSize = "45px";
playerPause.style.backgroundPosition = "center";
playerPause.style.top = "-24px";
playerPause.style.right = "140px";
playerPause.style.width = "45px";
playerPause.style.height = "45px";
playerPause.style.borderRadius = "999px";
playerPause.style.boxShadow = "0px 5px 10px rgba(255, 255, 255, 0.25)";
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
playerNext.style.boxShadow = "0px 5px 10px rgba(255, 255, 255, 0.25)";
playerNext.style.border = "none";
// 

const volumeSeekBar = document.createElement("div");
volumeSeekBar.type = "range";
volumeSeekBar.min = "0";
volumeSeekBar.max = "100";
volumeSeekBar.value = "0";
volumeSeekBar.style.width = "260px";
volumeSeekBar.style.bottom = "50px"; // Измененная позиция на 100 пикселей ниже
volumeSeekBar.style.left = "20px";
volumeSeekBar.style.appearance = "none";
volumeSeekBar.style.height = "5px";
volumeSeekBar.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.25)";
volumeSeekBar.style.background = "rgba(255, 255, 255, 0.3)";
volumeSeekBar.style.outline = "none";
volumeSeekBar.style.borderRadius = "999px";
volumeSeekBar.style.cursor = "pointer";
volumeSeekBar.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.25)";
volumeSeekBar.style.position = "absolute";
volumeSeekBar.style.display = "flex";

// Добавляем обработчик события клика на полосе громкости
volumeSeekBar.addEventListener("click", function(event) {
  const clickX = event.clientX - volumeSeekBar.getBoundingClientRect().left;
  const seekPosition = clickX / volumeSeekBar.clientWidth;
  const currentTrack = tracks.find(track => track.playing);
  if (currentTrack) {
    const volume = seekPosition;
    currentTrack.audio.volume = volume;
    // Обновляем ширину индикатора
    updateVolumeIndicatorWidth(volume * 100);
  }
});


const volumeIndicator = document.createElement("div");
volumeIndicator.style.width = "100%"; // Изначально установленная ширина индикатора (0%)
volumeIndicator.style.height = "100%";
volumeIndicator.style.background = "rgba(255, 255, 255, 0.5)";
volumeIndicator.style.borderRadius = "999px";


// Функция для обновления ширины индикатора громкости
function updateVolumeIndicatorWidth(volumePercentage) {
  volumeIndicator.style.width = volumePercentage + "%";
}

// Добавляем индикатор громкости в ползунок громкости
volumeSeekBar.appendChild(volumeIndicator);



// Создаем полосу промотки
const playerSeekBar = document.createElement("div");
playerSeekBar.type = "range";
playerSeekBar.min = "0";
playerSeekBar.max = "100";
playerSeekBar.value = "0";
playerSeekBar.style.width = "260px";
playerSeekBar.style.bottom = "180px";
playerSeekBar.style.left = "20px";
playerSeekBar.style.appearance = "none";
playerSeekBar.style.height = "5px";
playerSeekBar.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.25)";
playerSeekBar.style.background = "rgba(255, 255, 255, 0.3)";
playerSeekBar.style.outline = "none";
playerSeekBar.style.borderRadius = "999px";
playerSeekBar.style.cursor = "pointer";
playerSeekBar.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.25)";
playerSeekBar.style.position = "absolute";
playerSeekBar.style.display = "flex";

// Пример использования функции обновления положения индикатора
var duration = 1000; // Общая продолжительность (в секундах)
let currentTime = 0; // Текущее время воспроизведения (в секундах)

// Создаем элемент индикатора
const indicator = document.createElement("div");
indicator.style.width = parseInt(currentTime) + "px";
indicator.style.height = "100%";
indicator.style.background = "rgba(255, 255, 255, 0.5)";
indicator.style.borderRadius = "999px";

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





volumeSeekBar.addEventListener('mouseenter', function() {
  volumeSeekBar.style.height = '10px';
  volumeSeekBar.style.transition = '0.2s';
  volumeIndicator.style.transition = '0.2s';
  volumeIndicator.style.height = '10px';
});

volumeSeekBar.addEventListener('mouseleave', function() {
  volumeSeekBar.style.height = '5px';
  volumeSeekBar.style.transition = '0.2s';
  volumeIndicator.style.transition = '0.2s';
  volumeIndicator.style.height = '5px';
});





// Добавляем обработчик события изменения значения полосы промотки
playerSeekBar.addEventListener("input", function(event) {
  const seekValue = event.target.value;
  const currentTrack = tracks.find(track => track.playing);

  if (currentTrack) {
    let seekTime = (currentTrack.audio.duration * seekValue) / 100;
    currentTrack.audio.currentTime = seekTime;
    // currentTime = seekValue;
    updateIndicatorWidth(seekValue); // Обновляем ширину индикатора
  }
});


updateIndicatorPosition(currentTime, duration);



// Добавляем индикатор в полосу промотки
playerSeekBar.appendChild(indicator);

// Добавляем полосу промотки в контейнер слайдера
// playerContainer.appendChild(playerSeekBar);

let currentTrack;


// Обработчик события клика на полосе промотки
playerSeekBar.addEventListener("click", function(event) {
 const seekPosition = event.offsetX / playerSeekBar.clientWidth;
  const currentTrack = tracks.find(track => track.playing);
  if (currentTrack) {
    const seekTime = currentTrack.audio.duration * seekPosition;
    currentTrack.audio.currentTime = seekTime;
    currentTrack.audio.addEventListener('timeupdate', function() {
  currentTime = currentTrack.audio.currentTime;
  updateIndicatorWidth((currentTime / currentTrack.audio.duration) * 100);
});
    indicator.style.width = parseInt(currentTime) + "px";
    updateIndicatorWidth(seekPosition * 100); // Обновляем ширину индикатора
  }
});



let seekBarPosition;

// Функция для обновления положения индикатора на основе текущего времени воспроизведения
function updateIndicatorPosition(currentTime, duration) {
  const percent = (currentTime / duration) * 100;
  // playerSeekBar.value = percent;
  playerSeekBar.value = parseInt(percent);
  currentTime = (duration / 100) * percent;
  updateIndicatorWidth(percent);
  updateTimeLabel(timeLabel, currentTime);
}



// Функция для обновления ширины индикатора
function updateIndicatorWidth(percent) {
  indicator.style.width = parseInt(percent) + "%";
}

function updateTimeLabel(label, time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
  label.textContent = formattedTime;
}


// 
// Добавляем стили для hover состояния кнопок
playerBack.addEventListener("mouseenter", function() {
  playerBack.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/back/back_hover.png')";
});

playerBack.addEventListener("mouseleave", function() {
  playerBack.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/back/back.png')";
});

playerPlay.addEventListener("mouseenter", function() {
  playerPlay.style.transition = "0.4s";
  playerPlay.style.background = "rgba(255, 255, 255, 0.25";
  // playerPlay.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/play/play_hover.png')";
});

playerPlay.addEventListener("mouseleave", function() {
  playerPlay.style.transition = "0.4s";
  playerPlay.style.background = "rgba(255, 255, 255, 0";
  // playerPlay.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/controls/play/play.png')";
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
    playerPlay.style.transition = "0.4s";
  playerPlay.style.background = "rgba(255, 255, 255, 0.35";
});

playerPlay.addEventListener("mouseup", function() {
  playerPlay.style.transition = "0.4s";
  playerPlay.style.background = "rgba(255, 255, 255, 0";
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
    duration1: "-5:17",
    artist: "Ludovico Einaudi, Daniel Hope & I Virtuosi Italiani",
    image: "https://administrati0n.github.io/data-one/player/img/blured/Experience.png",
    image2: "https://administrati0n.github.io/data-one/player/img/logo/Experience.jpg",
    audio: "https://administrati0n.github.io/data-one/player/music/Experience.mp3",
    playing: false
  },
  {
    title: "Where Is My Mind",
    duration1: "-2:45",
    artist: "Maxence Cyrin",
    image: "https://administrati0n.github.io/data-one/player/img/blured/Where Is My Mind.png",
    image2: "https://administrati0n.github.io/data-one/player/img/logo/Where Is My Mind.jpeg",
    audio: "https://administrati0n.github.io/data-one/player/music/Where Is My Mind.mp3",
    playing: false
  },
  {
    title: "Pure Imagination",
    duration1: "-1:04",
    artist: "Shiloh",
    image: "https://administrati0n.github.io/data-one/player/img/blured/Pure Imagination.png",
    image2: "https://administrati0n.github.io/data-one/player/img/logo/Pure Imagination.jpeg",
    audio: "https://administrati0n.github.io/data-one/player/music/Pure Imagination.mp3",
    playing: false
  },
  {
    title: "The Beach (Instrumental + Slowed + Muffled)",
    duration1: "-4:24",
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
// updateTimeLabel(durationLabel, duration);

// playerContainer.appendChild(currentTimeLabel);
frame.appendChild(playerSeekBar);
// playerContainer.appendChild(durationLabel);
// playerContainer.appendChild(controlsContainer);



// Функция изменения трека
function changeTrack(index) {
  const track = tracks[index];
  playerTrackTitle.textContent = track.title;
  playerArtistTitle.textContent = track.artist;
  durationLabel.textContent = track.duration1 + parseInt(timeLabel);
bgColor.style.backgroundImage = `url('${track.image}')`;
bgBlack.style.backgroundImage = `url('${track.image}')`;

  // bgColor.src = `url('${track.image}')`;
// bgBlack.src = `url('${track.image}')`;
  playerImage2.style.backgroundImage = `url('${track.image2}')`;
  if (!track.playing) {

    return; // Если трек не должен быть воспроизведен, прекращаем выполнение функции
  }
  // Проверяем состояние воспроизведения трека
  if (track.playing) {
    // playerPlay.style.display = "none";
playerPlay5.style.top = "10px";
playerPlay5.style.height = "26px";
    // playerPause.style.display = "block";
  } else {
    playerPlay5.style.top = "18px";
playerPlay5.style.height = "9px";
playerPlay3.style.opacity = "0";
playerPlay2.style.top = "10";
playerPlay2.style.opacity = "0";
    // playerPlay.style.display = "block";
    // playerPause.style.display = "none";
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

let playm = "n";

// Обработчик события для кнопки playerPlay
playerPlay.addEventListener("click", function() {
  const currentTrack = tracks.find(track => track.playing);

  const newTrack = tracks.find(track => track.title === playerTrackTitle.textContent);

  if (playm === "n") {
    playm = "y";
  newTrack.playing = true;
  newTrack.audio.play();
  playerPlay5.style.top = "10px";
playerPlay5.style.height = "26px";

playerPlay3.style.height = "10px";
playerPlay3.style.right = "24px";
playerPlay3.style.top = "11px";

playerPlay2.style.height = "10px";
playerPlay2.style.right = "24px";
playerPlay2.style.top = "26px";
  }else{
playm = "n";
currentTrack.playing = false;
currentTrack.audio.pause(); // Приостанавливаем текущий трек

playerPlay5.style.top = "18px";
playerPlay5.style.height = "9px";

playerPlay3.style.top = "6px";
playerPlay3.style.right = "17px";
playerPlay3.style.height = "26px";

playerPlay2.style.top = "14px";
playerPlay2.style.right = "17px";
playerPlay2.style.height = "26px";
  }


});





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

  // Добавляем обработчик события timeupdate
  track.audio.addEventListener('timeupdate', function() {
    currentTime = track.audio.currentTime;
    updateIndicatorPosition(currentTime, track.audio.duration);
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

    const currentTrack = tracks.find(track => track.playing);

  const newTrack = tracks.find(track => track.title === playerTrackTitle.textContent);

  if (playm === "n") {
    playm = "y";
  newTrack.playing = true;
  newTrack.audio.play();
  playerPlay5.style.top = "10px";
playerPlay5.style.height = "26px";

playerPlay3.style.height = "10px";
playerPlay3.style.right = "24px";
playerPlay3.style.top = "11px";

playerPlay2.style.height = "10px";
playerPlay2.style.right = "24px";
playerPlay2.style.top = "26px";

  if (playm === "y") {
        const currentTrack = tracks.find(track => track.playing);

  const newTrack = tracks.find(track => track.title === playerTrackTitle.textContent);
playm = "n";
currentTrack.playing = false;
currentTrack.audio.pause(); // Приостанавливаем текущий трек

playerPlay5.style.top = "18px";
playerPlay5.style.height = "9px";

playerPlay3.style.top = "6px";
playerPlay3.style.right = "17px";
playerPlay3.style.height = "26px";

playerPlay2.style.top = "14px";
playerPlay2.style.right = "17px";
playerPlay2.style.height = "26px";
  }

  }else{
playm = "n";
currentTrack.playing = false;
currentTrack.audio.pause(); // Приостанавливаем текущий трек

playerPlay5.style.top = "18px";
playerPlay5.style.height = "9px";

playerPlay3.style.top = "6px";
playerPlay3.style.right = "17px";
playerPlay3.style.height = "26px";

playerPlay2.style.top = "14px";
playerPlay2.style.right = "17px";
playerPlay2.style.height = "26px";
  }
  if (playm === "y") {
        const currentTrack = tracks.find(track => track.playing);

  const newTrack = tracks.find(track => track.title === playerTrackTitle.textContent);
    playm = "y";
  newTrack.playing = true;
  newTrack.audio.play();
  playerPlay5.style.top = "10px";
playerPlay5.style.height = "26px";

playerPlay3.style.height = "10px";
playerPlay3.style.right = "24px";
playerPlay3.style.top = "11px";

playerPlay2.style.height = "10px";
playerPlay2.style.right = "24px";
playerPlay2.style.top = "26px";
}

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

const playerLossLessC = document.createElement("div");
playerLossLessC.style.width = "111px";
playerLossLessC.style.height = "24px";
playerLossLessC.style.display = "flex";
playerLossLessC.style.position = "absolute";
playerLossLessC.style.borderRadius = "4px";
playerLossLessC.style.top = "375px";
playerLossLessC.style.left = "95px";
playerLossLessC.style.background = "rgba(255, 255, 255, 0.25)";


const playerLossLessCT = document.createElement("span");
playerLossLessCT.style.fontSize = "17px";
playerLossLessCT.style.fontFamily = "Gilroy";
playerLossLessCT.textContent = "LossLess";
playerLossLessCT.style.position = "absolute";
playerLossLessCT.style.top = "2px";
playerLossLessCT.style.right = "7px";
playerLossLessCT.style.opacity = "0.5";

const playerLossLessCL = document.createElement("div");
playerLossLessCL.style.backgroundImage = "url('https://administrati0n.github.io/data-one/player/img/lossless2.png')";
playerLossLessCL.style.backgroundSize = "24px";
playerLossLessCL.style.backgroundRepeat = "no-repeat";
playerLossLessCL.style.width = "30px";
playerLossLessCL.style.height = "15px";
playerLossLessCL.style.position = "absolute";
playerLossLessCL.style.top = "4px";
playerLossLessCL.style.left = "7px";
playerLossLessCL.style.opacity = "0.5";



// Добавляем элементы в DOM 
lyrics.appendChild(timeLabel);
// Добавляем ползунок громкости на страницу
lyrics.appendChild(volumeSeekBar);
playerSeekBar.appendChild(indicator);
// playerContainer.appendChild(playerImage);
lyrics.appendChild(currentTimeLabel);
lyrics.appendChild(durationLabel);
lyrics.appendChild(playerImageContainer);
lyrics.appendChild(playerSeekBar);
lyrics.appendChild(playerLossLessC);
playerLossLessC.appendChild(playerLossLessCT);
playerLossLessC.appendChild(playerLossLessCL);
playerImageContainer.appendChild(playerImage2);
playerImageContainer.appendChild(playerContainerV);
playerContainerV.appendChild(playerTrackTitle);
playerContainerV.appendChild(playerArtistTitle);
lyrics.appendChild(playerContainerH);
playerContainerH.appendChild(playerPause);
playerContainerH.appendChild(playerPlay);
playerPlay.appendChild(playerPlay1);
playerPlay.appendChild(playerPlay2);
playerPlay.appendChild(playerPlay3);
playerPlay.appendChild(playerPlay5);
// playerPlay.appendChild(playerPlay4);
playerContainerH.appendChild(playerBack);
playerContainerH.appendChild(playerNext);
// document.body.appendChild(playerContainer);
document.body.appendChild(frame);
// Добавляем frame в DOM дерево (например, внутрь элемента с id="container")
// const container = document.getElementById('div');
// container.appendChild(frame);

// Изначально отображаем первый трек
changeTrack(0);