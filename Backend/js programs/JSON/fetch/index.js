
// fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
//     .then(response => {
//         //if response if not ok or ok code is not within the range of 200
//         if(!response.ok){
//             throw new Error("could not fetch resource");
//         }
//         //if response is ok
//         return response.json()
//     })
//     .then(data => console.log(data.id))
//     .catch(error => console.error(error));


//using async await 

async function fetchData(){
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("fetch failed ");
        }
        const data = await response.json();
        // console.log(data);
        const pokemonSprite = data.sprites.front_default;
        const imageElement = document.getElementById("pokemonSprite");

        imageElement.src=pokemonSprite;
        imageElement.style.display ="block";    //to make the image visible as initially display is set to none 
    }
    catch(error){
        console.error(error);
    }
}