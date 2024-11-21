function getComputerChoice (){
    let pick = ["Rock", "Paper", "Scissors"];
    return pick[Math.floor(Math.random() * pick.length)];
}

function getHumanChoice (humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
         return 'Its a tie, you both picked ${humanChoice}';
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        return "You win! Rock beats scissors";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        return "You win! Scissor beats paper!";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        return "You win! Paper beats rock!";
    } else {
        return "You lose! ${computerChoice} beats ${humanChoice}";
    }
}

const humanChoice = prompt ("Pick one");
const computerChoice = getComputerChoice();
console.log(getHumanChoice (humanChoice, computerChoice));