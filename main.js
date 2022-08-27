// script for reponsive navbar

let menuIcon= document.getElementById('menu');
let navbar= document.getElementById("navbar-nav");
menuIcon.onclick=()=>{
    if(menuIcon.getAttribute("name")=="menu")
    {
        menuIcon.setAttribute("name","close")
        navbar.style.display="flex";    
    }else
    {
        menuIcon.setAttribute("name","menu")
        navbar.style.display="none";
    }
}

// script for hero section video

let heroVideo=document.querySelector("#heroVideo")
let playButton=document.querySelector(".play_btn");

playButton.onclick=()=>{
    if(playButton.name=="pause")
    {
        playButton.name="play";
        heroVideo.pause();
    }else
    {
        playButton.name="pause";
        heroVideo.play();
    }
}