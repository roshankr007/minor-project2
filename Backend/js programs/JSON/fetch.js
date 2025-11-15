//fetch function is promise based so it either resolves or reject 

fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
    .then(response => {
        //if response if not ok or ok code is not within the range of 200
        if(!response.ok){
            throw new Error("could not fetch resource");
        }
        //if response is ok
        return response.json()
    })
    .then(data => console.log(data.id))
    .catch(error => console.error(error));