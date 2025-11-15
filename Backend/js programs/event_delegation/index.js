document.querySelector("#category").addEventListener('click',(e)=>{         // e is the event object
    console.log("parent clicked");
    if(e.target.tagName=='LI')
        window.location.href="/"+e.target.id;
})