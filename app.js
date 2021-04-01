let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(2).sub();
    const smallCompWord = "comp".fontsize(2).sub();
    const userChoise_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats  ${convertToWord(compChoice)}${smallCompWord}. You win! `;
    //Ger div class ett grönt sken
    userChoise_div.classList.add('green-glow');
    //Tar bort gröna skenet efter 300 ms.
    //setTimeout(function() Kan ersättas med () => { console.log("hello")}, 4000);
    setTimeout(() => userChoise_div.classList.remove('green-glow'), 300);
}



function lose(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(2).sub();
    const smallCompWord = "comp".fontsize(2).sub();
    const userChoise_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} lose to ${convertToWord(compChoice)}${smallCompWord}. You lost! `;
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    userChoise_div.classList.add('red-glow');
    setTimeout(() => userChoise_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(2).sub();
    const smallCompWord = "comp".fontsize(2).sub();
    const userChoise_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals  ${convertToWord(compChoice)}${smallCompWord}. It's a draw! `;
    userChoise_div.classList.add('gray-glow');
    setTimeout(() => userChoise_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch(userChoice + compChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }

}


function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();