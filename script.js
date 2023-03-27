console.log("Welcome to Bajao");
let songindex=0;

let audioelement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');

let myprogressbar=document.getElementById('myprogressbar');
let gif =document.getElementById('gif');
let mastersongname =document.getElementById('mastersongname');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    
    {k:"Chaudhary",filePath:"songs/1.mp3",coverpath:"/cover.jpg"},
    {k:"Besharam Rang",filePath:"songs/2.mp3",coverpath:"/cover.jpg"},
    {k:"Tum Mile Dil Khile",filePath:"songs/3.mp3",coverpath:"/cover.jpg"},
    {k:"Pasoori",filePath:"songs/4.mp3",coverpath:"/cover.jpg"},
    {k:"Jedha Nasha",filePath:"songs/5.mp3",coverpath:"/cover.jpg"},
    {k:"Tere Pyaar Me",filePath:"songs/6.mp3",coverpath:"/cover.jpg"},
    {k:"Malang Sajna",filePath:"songs/7.mp3",coverpath:"/cover.jpg"},
    {k:"Manike",filePath:"songs/8.mp3",coverpath:"/cover.jpg"},
]
songitems.forEach((element,i)=>{
   
element.getElementsByTagName("img")[0].src=songs[i].coverpath;
element.getElementsByClassName("k")[0].innerText=songs[i].k;

})

masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
}
else{
    audioelement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
    gif.style.opacity=0;
}
})
audioelement.addEventListener('timeupdate',()=>{
   
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    
    myprogressbar.value=progress;

})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime=myprogressbar.value * audioelement.duration /100;
})
const makeallplays= ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play'); 

    })

}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src=`songs/${songindex+1}.mp3`;
        mastersongname.innerText=songs[songindex].k;

        audioelement.currentTime=0;
        audioelement.play();
        
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
    
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=7){
        songindex=0;
    }
    else{
    songindex+=1;
    }
    audioelement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].k;
        audioelement.currentTime=0;
        audioelement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<0){
        songindex=0;
    }
    else{
    songindex-=1;
    }
    audioelement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].k;
        audioelement.currentTime=0;
        audioelement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
})