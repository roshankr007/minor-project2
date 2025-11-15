// let score =0;
// function increaseScore(points){
//     score +=points;
//     console.log(`${score}pts`);
// }

// function decreaseScore(points){
//     score -=points;
//     console.log(`${score}pts`);
// }
// function getScore(){
//     return score;
// }

// increaseScore(3);
// increaseScore(4);
// decreaseScore(1);

// console.log(`the final score is : ${score}pts`)

//the problem here is that anyone can access the score and change
//what we can do is - enclose it in closure 

function createGame(){
        let score =0;
    function increaseScore(points){
        score +=points;
        console.log(`${score}pts`);
    }

    function decreaseScore(points){
        score -=points;
        console.log(`${score}pts`);
    }
    function getScore(){
        return score;
    }
    return {increaseScore,decreaseScore,getScore};
}

const game = createGame(); /* here the game object contains  reference to 
3 methods of the createGame() function which are increaseScore , decreaseScore, getScore */

game.increaseScore(18);
game.increaseScore(21);
game.decreaseScore(3);
console.log(`the final score is ${game.getScore()}`);


