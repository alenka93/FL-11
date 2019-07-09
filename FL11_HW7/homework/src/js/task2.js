let attemptStep = 4;
let attempt = 3;
let changePrize = 2;
let max = 8;
let prize = 0;
let maxPrize = 100;
let startGame = confirm('Do you want to play a game?');
if (startGame === false) {
    alert('You did not become a millionaire, but can');
}else{
    while(startGame) {
        let random = Math.floor(Math.random() * (max+1));
        for (let i = 1; i <= attemptStep; i++) {
            let numberUser = parseInt(prompt(`Choose a roulette pocket number from 0 to ${max}
    Attemts left: ${attemptStep-i}
    Total prize: ${prize}$
    Possible prize on current attempt: ${maxPrize}$`));
            if (numberUser === random) {
                prize += Math.floor(maxPrize / Math.pow(changePrize, i - 1));
                     break;
                } else {
                    if (i === attempt) {
                        maxPrize = maxPrize/changePrize;
                        break;
                    }
                }
        }
        startGame = confirm(`Congratulation, you won! Your prize is: ${prize}$. Do you want to continue?`);
    }
    alert(`Thank you for your participation. Your prize is: ${prize}$`);
    startGame = confirm('Do you want to play again?');
}
