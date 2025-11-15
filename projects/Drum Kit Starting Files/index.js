const ele = document.querySelector('.set');

ele.querySelector('.w.drum').addEventListener("click",()=>{
     const image = document.createElement("img");
     image.src="images/crash.png";
     ele.querySelector('.w.drum').appendChild(image);
     const audio = new Audio("/sounds/crash.mp3");
     audio.play();
});

ele.querySelector('.a.drum').addEventListener("click",()=>{
     const audio = new Audio("/sounds/kick-bass.mp3");
     audio.play();
});

ele.querySelector(".s.drum").addEventListener("click",()=>{
     const audio = new Audio("/sounds/snare.mp3");
     audio.play();
});

ele.querySelector(".d.drum").addEventListener("click",()=>{
     const audio = new Audio("/sounds/tom-1.mp3");
     audio.play();
});

ele.querySelector(".j.drum").addEventListener("click",()=>{
     const audio = new Audio("/sounds/tom-2.mp3");
     audio.play();
});

ele.querySelector(".k.drum").addEventListener("click",()=>{
     const audio = new Audio("/sounds/tom-3.mp3");
     audio.play();
});

ele.querySelector(".l.drum").addEventListener("click",()=>{
     const audio = new Audio("/sounds/tom-4.mp3");
          pressed("l");
     audio.play();

});




document.addEventListener("keydown",(event)=>{
     const key = event.key;
     if(key=="w" || key=="W"){
          const audio = new Audio("/sounds/crash.mp3");
          audio.play();
     }
})

document.addEventListener("keydown",(event)=>{
     const key = event.key;
     if(key=="a" || key=="A"){
          const audio = new Audio("/sounds/kick-bass.mp3");
          audio.play();
     }
})

document.addEventListener("keydown",(event)=>{
     const key = event.key;
     if(key=="s" || key=="S"){
          const audio = new Audio("/sounds/snare.mp3");
          audio.play();
          pressed(key);
     }
})
document.addEventListener("keydown",(event)=>{
     const key = event.key;
     if(key=="d" || key=="D"){
          const audio = new Audio("/sounds/tom-1.mp3");
          audio.play();
          pressed(key);
     }
})
document.addEventListener("keydown",(event)=>{
     const key = event.key;
     if(key=="j" || key=="J"){
          const audio = new Audio("/sounds/tom-2.mp3");
          audio.play();
          pressed(key);
     }
})
document.addEventListener("keydown",(event)=>{
     const key = event.key;
     if(key=="k" || key=="K"){
          const audio = new Audio("/sounds/tom-3.mp3");
          audio.play();
          pressed(key);
     }
})
document.addEventListener("keydown",(event)=>{
     const key = event.key;
     if(key=="l" || key=="L"){
          const audio = new Audio("/sounds/tom-4.mp3");
          audio.play();
          pressed(key); 
          // console.log(key); 
     }
})


function pressed(key){
     console.log(key);
     var currentKey = document.querySelector("."+key);
     setTimeout(()=>{
          currentKey.classList.add("pressed");
          currentKey.classList.remove("pressed");   
     }, 100);

}
