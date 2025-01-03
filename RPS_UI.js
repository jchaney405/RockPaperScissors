let computerchoice = 0
let humanchoice = ""
var humanScore = 0
var computerScore = 0
var timesPlayed = 0 
var tieScore = 0
let gamemessage = ""
let cummulativeScore = ""
let rockPic = './theRock.jpg';
let paperPic = './paper.jpg';
let scissorsPic = './scissors.jpg';
let tieMessage = '';

const welcomeMessage = document.createElement("h1");
welcomeMessage.innerText = `Let's Play THE ROCK Paper Scissors!`;
document.body.appendChild(welcomeMessage);
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
const startGame = document.createElement("div");
const gameBtns = document.createElement("div");
const resetGame = document.createElement("div");
const gamesPlayed = document.createElement("div");
const gamesBoard = document.createElement('table');
const scoreBoard = document.createElement('table');
const pics = document.createElement('div');
const humanPic = document.createElement('img');
humanPic.id = 'humanPic';
const computerPic = document.createElement('img');
computerPic.id = 'computerPic';
scoreBoard.id = 'scoreBoard';
gamesPlayed.id = 'gamesPlayed';
gamesBoard.id = 'gamesBoard';
const btnRock = document.createElement("button");
btnRock.id = "btnRock";
btnRock.innerText = 'Rock';
btnRock.onclick = () => letsGo('Rock');
const btnPaper = document.createElement("button");
btnPaper.id = "btnPaper";
btnPaper.innerText = 'Paper';
btnPaper.onclick = () => letsGo('Paper');
const btnScissors = document.createElement("button");
btnScissors.id = "btnScissors";
btnScissors.innerText = 'Scissors';
btnScissors.onclick = () => letsGo('Scissors');
const btnReset = document.createElement("button");
btnReset.id = "btnReset";
btnReset.innerText = 'Reset';
btnReset.onclick = () => reset();
const div = document.createElement("div");
const btnPlay = document.createElement("button");
btnPlay.id = "btnPlay";
btnPlay.innerText = 'Play';
btnPlay.onclick = () => play();
const winner = document.createElement("h1");
const score = document.createElement('h1');
div.classList.add("div");

startGame.appendChild(btnPlay);
gameBtns.appendChild(btnRock);
gameBtns.appendChild(btnPaper);
gameBtns.appendChild(btnScissors);
resetGame.appendChild(btnReset);
container.appendChild(startGame);
container.appendChild(gameBtns);
container.appendChild(resetGame);
createBoard();
container.appendChild(pics);
pics.appendChild(humanPic);
pics.appendChild(computerPic);

function showPics(x, y) {
    humanPic.src = x;
    computerPic.src = y;
    humanPic.style.width = '277px';
    humanPic.style.height = '277px';
    humanPic.style.marginRight = '4px';
    computerPic.style.width = '277px';
    computerPic.style.height = '277px';
    computerPic.style.marginLeft = '4px';
    document.getElementById('humanPic').style.visibility = 'visible';
    document.getElementById('computerPic').style.visibility = 'visible';
}

function play() {
    document.getElementById('btnRock').disabled = false;
    document.getElementById('btnPaper').disabled = false;
    document.getElementById('btnScissors').disabled = false;
    document.getElementById('btnPlay').style.visibility = 'hidden';
}

function createBoard() {
    const gamesTblHeader = document.createElement('thead')
    for (let h = 0; h < 1; h++) {
        const row = document.createElement('tr')
    
        for (let h = 0; h < 1; h++) {
            const header = document.createElement('th');
            row.appendChild(header);
        }
    gamesTblHeader.appendChild(row)
    }
    const gamesTblBody = document.createElement('tbody')
    for (let i = 0; i<1; i++){
        const row = document.createElement('tr');

        for (let j = 0; j < 1; j++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        }
    gamesTblBody.appendChild(row);
    }
    gamesBoard.appendChild(gamesTblHeader)
    gamesBoard.appendChild(gamesTblBody)
    container.appendChild(gamesBoard)
    gamesBoard.setAttribute('border','2');

    document.getElementById('gamesBoard').childNodes[0].childNodes[0].childNodes[0].innerHTML = 'Games Played';
    document.getElementById('gamesBoard').childNodes[1].childNodes[0].childNodes[0].innerHTML = timesPlayed +'/5'


    const scoreTblHeader = document.createElement('thead')
    for (let h = 0; h < 1; h++) {
        const row = document.createElement('tr')
    
        for (let h = 0; h < 3; h++) {
            const header = document.createElement('th');
            row.appendChild(header);
        }
    scoreTblHeader.appendChild(row)
    }
    const scoreTblBody = document.createElement('tbody')
    for (let i = 0; i<1; i++){
        const row = document.createElement('tr');

        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        }
    scoreTblBody.appendChild(row);
    }
    scoreBoard.appendChild(scoreTblHeader)
    scoreBoard.appendChild(scoreTblBody)
    container.appendChild(scoreBoard)
    scoreBoard.setAttribute('border','2');

    document.getElementById('scoreBoard').childNodes[0].childNodes[0].childNodes[0].innerHTML = 'Human';
    document.getElementById('scoreBoard').childNodes[0].childNodes[0].childNodes[1].innerHTML = 'Computer';
    document.getElementById('scoreBoard').childNodes[0].childNodes[0].childNodes[2].innerHTML = 'Tie';

    document.getElementById('scoreBoard').childNodes[1].childNodes[0].childNodes[0].innerHTML = humanScore;
    document.getElementById('scoreBoard').childNodes[1].childNodes[0].childNodes[1].innerHTML = computerScore;
    document.getElementById('scoreBoard').childNodes[1].childNodes[0].childNodes[2].innerHTML = tieScore;
}

function updateScore() {
    document.getElementById('scoreBoard').childNodes[1].childNodes[0].childNodes[0].innerHTML = humanScore;
    document.getElementById('scoreBoard').childNodes[1].childNodes[0].childNodes[1].innerHTML = computerScore;
    document.getElementById('scoreBoard').childNodes[1].childNodes[0].childNodes[2].innerHTML = tieScore;
    document.getElementById('gamesBoard').childNodes[1].childNodes[0].childNodes[0].innerHTML = timesPlayed +'/5'
}

function showReset () {
    document.getElementById('btnReset').style.visibility = "visible";
    document.getElementById('btnPlay').style.visibility = 'hidden';
    document.getElementById('btnRock').disabled = true;
    document.getElementById('btnPaper').disabled = true;
    document.getElementById('btnScissors').disabled = true;
}

function randomNumber() {
    return Math.floor(Math.random() * 3);
} 

function getComputerChoice() {
 switch(randomNumber()) {
        case 0:
            computerchoice = "Rock";
            break;
        case 1:
            computerchoice = "Paper";
            break;
        case 2:
            computerchoice = "Scissors";
            break;
        };
 }

function getHumanChoice(x) {
   humanchoice = x , playRound() 
}           


function letsGo(x) {
    getComputerChoice();
    getHumanChoice(x);
}

function reset(){
    humanScore = 0; computerScore = 0; tieScore = 0; timesPlayed = 0; 
    cummulativeScore = '' , gamemessage = '' ;
    alertScore();
    alertWinner()
    updateScore();
    document.getElementById('humanPic').style.visibility = 'hidden';
    document.getElementById('computerPic').style.visibility = 'hidden';
    document.getElementById('btnReset').style.visibility = 'hidden';
    document.getElementById('btnPlay').style.visibility = 'visible';
}

function alertWinner(){
    winner.textContent = gamemessage;
    container.appendChild(winner);    
}

function alertScore() {
    score.textContent = cummulativeScore;
    container.appendChild(score);    
}

function tied() {
    if (humanchoice === 'Rock') {tieMessage = `You and the computer both chose The Rock. The Rock can't beat himself. You tie!`}
    else if (humanchoice === 'Paper') {tieMessage = `You and the computer both chose The Rock's Contract. You both can't own the Rock. You tie while in legal mediation`} 
    else {tieMessage = `ARRGH! SCISSOR ME TIMBERS! You and the computer both chose Scissors. You tie!`}
}

function playRound() {
    if (humanchoice === 'Rock' && computerchoice === 'Paper') {computerScore++; timesPlayed++;  gamemessage = 'You chose The Rock and the computer chose his Contract. You lose, the Computer OWNS The Rock'; alertWinner(); } 
    else if (humanchoice === 'Rock' && computerchoice === 'Scissors') {humanScore++; timesPlayed++; gamemessage ='You chose The Rock and the computer chose Scissors. You win, The Rock destroys the Scissors'; alertWinner();  } 
    else if (humanchoice === 'Paper' && computerchoice === 'Rock') {humanScore++; timesPlayed++; gamemessage =`You chose The Rock's Contract and the computer chose The Rock. You win, you OWN The Rock`; alertWinner();  }
    else if (humanchoice === 'Paper' && computerchoice === 'Scissors') {computerScore++; timesPlayed++; gamemessage =`You chose The Rock's Contract and the computer chose Scissors. You lose, Scissors SHRED the Paper!`; alertWinner();   }
    else if (humanchoice === 'Scissors' && computerchoice === 'Rock') {computerScore++; timesPlayed++; gamemessage ='You chose Scissors and the computer chose The Rock. You lose, The Rock destroys the Scissors! Can you Smell what The Rock is cooking?'; alertWinner();   }
    else if (humanchoice === 'Scissors' && computerchoice === 'Paper') {humanScore++; timesPlayed++;  gamemessage ='You chose Scissors and the computer chose Paper. You win, Scissors SHRED the Paper!'; alertWinner(); }
    else {timesPlayed++; tieScore++; tied(); gamemessage = tieMessage; alertWinner();  }

    if (humanchoice === 'Rock') {x = rockPic}
    else if (humanchoice === 'Paper') {x = paperPic}
    else {x = scissorsPic};

    if (computerchoice === 'Rock') {y = rockPic}
    else if (computerchoice === 'Paper') {y = paperPic}
    else {y = scissorsPic};

    showPics(x, y);

    if (timesPlayed < 5) {cummulativeScore ='Please play again'; alertScore();updateScore();}
    else if (timesPlayed >= 5 && humanScore > computerScore) {cummulativeScore ='Congratulations!!! You beat the computer with a record of ' + humanScore + '/' + computerScore + '/' + tieScore + '.'; alertScore(); updateScore(); showReset();}
    else if (timesPlayed >= 5 && computerScore > humanScore) {cummulativeScore =`Boo!!! You lost to the computer with a record of ` + humanScore + '/' + computerScore + '/' + tieScore + '. Better luck next time.'; alertScore(); updateScore(); showReset() ;}
    else {cummulativeScore ='You tied the computer with a record of ' + humanScore + '/' + computerScore + '/' + tieScore + '. Better luck next time!'; alertScore(); updateScore(); showReset() ;};
}

function initBtns() {
    document.getElementById('btnRock').disabled = true;
    document.getElementById('btnPaper').disabled = true;
    document.getElementById('btnScissors').disabled = true;
    document.getElementById('btnReset').style.visibility = 'hidden';
}

updateScore();
initBtns();
   