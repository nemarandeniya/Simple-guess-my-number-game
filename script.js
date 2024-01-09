// document.querySelector(".check").addEventListener('click',function () {
//     document.querySelector(".message").textContent = "You lost!";
    
// })

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Corrrect number!';

// console.log(document.querySelector('.message').textContent);

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector(".check").addEventListener('click',function () {
    const guess = Number(document.querySelector(".guess").value);


    // when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No number!';
        displayMessage('⛔ No number!');

        //when player wins
    } else if(guess === secretNumber){
        
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('🔥 Corrrect number!');
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

       //when guess is wrong
    }else if(guess !== secretNumber){
        document.querySelector('.message').textContent =guess > secretNumber? '📈 Too high!' : '📉 Too low!';
        if (score > 1) {
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '😒 You lost the game!';
            displayMessage('😒 You lost the game!' )
        }
    }
    //     //when guess is too high
    // }else if(guess > secretNumber){
    //     document.querySelector('.message').textContent = '📈 Too high!';
        
    //     if (score > 1) {
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '😒 You lost the game!';
    //     }
        

    //     //when guess is too low
    // }else if(guess < secretNumber){
    //     document.querySelector('.message').textContent = '📉 Too low!';
    //     if (score > 1) {
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '😒 You lost the game!';
    //     }
    // }
       

        });


document.querySelector('.again').addEventListener('click',function(){
    
    
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})