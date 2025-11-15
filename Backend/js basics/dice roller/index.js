//dice roller 
function rollDice(){

    const numofDice = document.getElementById("numofDice").value;
    const diceResult = document.getElementById("diceResult")
    const diceImages = document.getElementById("diceImages")

    //to store alll the dice rolls
    const values =[];
    //array for images
    const images =[];

    const urls =['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3U8Yxe1M6XOwYnx8Hz_UQVl2GoN9mVec3lQ&s',
                 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg',
                 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt09zawxdfXMuoqpc2ZB4Lbel7gQyvSdi3lg&s',
                 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiSWHpGNLGdn3OymOrLvSmLnLsmWU-7LRXVQ&s',
                 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOXMpQe7ah_CYBttHSRiU95cjwxgdYOXY7rw&s',
                 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9DDOH-0D-NAl4n1NIYLXdmZ9gpsvh-ekqA&s']
    
    for(let i=0;i< numofDice;i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);

        //by using downloaded images- 
        //update the images array for correct image
        // images.push(`<img src="images/${value}.png">`);

        images.push(`<img src=${urls[value-1]}></img>`);
        console.log(`The image rolled is: ${images}`);
    }
    //set text content ie the result on the screen 
    diceResult.textContent = `You rolled : ${values.join(', ')}`
    diceImages.innerHTML = images.join('');
}