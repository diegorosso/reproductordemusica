const wrapper = document.querySelector(".wrapper"),
musicImg = wrapper.querySelector(".img-area img"),
musicName = wrapper.querySelector(".song-detail .name"),
musicArtist = wrapper.querySelector(".song-detail .artist");
mainAudio = wrapper.querySelector("#main-audio");
playPauseBtn = wrapper.querySelector(".play-pause");
prevBtn = wrapper.querySelector("#prev");


let musicIndex = 1;

window.addEventListener("load",()=>{
    loadMusic(musicIndex);
})

function loadMusic(indexNumb){
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
    mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
}

function playMusic(){
    wrapper.classList.add("paused")
    playPauseBtn.querySelector("i").innerText = "pause";
    mainAudio.play();
}

function pauseMusic(){
    wrapper.classList.remove("paused")
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    mainAudio.pause();
}

playPauseBtn.addEventListener ("click", ()=>{

    const isMusicPaused = wrapper.classList.contains("paused");
    isMusicPaused    ? pauseMusic () : playMusic () ;
})
