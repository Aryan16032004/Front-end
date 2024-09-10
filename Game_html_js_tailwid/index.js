const diceValue = document.getElementById("dice-number");
const dice = document.getElementById("dice");
const hold = document.getElementById("hold");
const currentUser1 = document.querySelector(".current-score1");
const currentUser2 = document.querySelector(".current-score2");
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");
const newgame =document.getElementById("new")

let currentScore1 = 0;
let currentScore2 = 0;
let userScore1 = 0;
let userScore2 = 0;
let currentUser = 1; // Start with user 1

// Roll the dice and update scores
function rollTheDice() {
    const randomDiceValue = randomDice();
    diceValue.innerHTML = `${randomDiceValue}`;
    console.log(`You rolled a ${randomDiceValue}.`);

    if (randomDiceValue !== 1) {
        if (currentUser === 1) {
            currentScore1 += randomDiceValue; // Add the dice value to the current score for user 1
            currentUser1.innerHTML = `${currentScore1}`;
        } else {
            currentScore2 += randomDiceValue; // Add the dice value to the current score for user 2
            currentUser2.innerHTML = `${currentScore2}`;
        }
    } else {
        // Reset current score on rolling 1
        if (currentUser === 1) {
            currentScore1 = 0;
            currentUser1.innerHTML = `${currentScore1}`;
        } else {
            currentScore2 = 0;
            currentUser2.innerHTML = `${currentScore2}`;
        }
        switchUser(); // Switch user after rolling 1
    }
}

// Switch between users
function switchUser() {
    currentUser = (currentUser === 1) ? 2 : 1;
}

// Handle hold button click
hold.addEventListener('click', () => {
    if (currentUser === 1) {
        userScore1 += currentScore1; 
        score1.innerHTML = `${userScore1}`;
        currentScore1 = 0;
        currentUser1.innerHTML = `${currentScore1}`;
    } else {
        userScore2 += currentScore2; 
        score2.innerHTML = `${userScore2}`;
        currentScore2 = 0;
        currentUser2.innerHTML = `${currentScore2}`;
    }
    switchUser(); // Switch user after holding
    checkWinner(); // Check for a winner
});

// Check if there is a winner
function checkWinner() {
    if (userScore1 >= 100) {
        alert("Player 1 wins!");
        resetGame();
    } else if (userScore2 >= 100) {
        alert("Player 2 wins!");
        resetGame();
    }
}

newgame.addEventListener("click",resetGame)
// Reset the game
function resetGame() {
    userScore1 = 0;
    userScore2 = 0;
    currentScore1 = 0;
    currentScore2 = 0;
    score1.innerHTML = `${userScore1}`;
    score2.innerHTML = `${userScore2}`;
    currentUser1.innerHTML = `${currentScore1}`;
    currentUser2.innerHTML = `${currentScore2}`;
    diceValue.innerHTML = "0";
    currentUser = 1; // Reset to player 1
}

// Generate a random dice value between 1 and 6
function randomDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Attach the roll dice event listener
dice.addEventListener('click', rollTheDice);
