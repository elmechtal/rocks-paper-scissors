
function computerPlay() { 
    let moves = ['rock', 'paper', 'scissor'];
    return moves[Math.floor(Math.random() * moves.length)];
}

function nextItem(array, item) { //Returns the next item of an in array.
    // The next item of the last item is the first item.
    let index = array.indexOf(item);
    if (index === array.length -1) {
        return array[0];
    }
    else {
        return array[index + 1];
    }
}



function playRound(computerChoice, playerChoice) { 
    let moves = ['rock', 'paper', 'scissor'];
    if (computerChoice === playerChoice) {
        return 'Draw! Try Again!';
    }
    else if (computerChoice === nextItem(moves, playerChoice)) {
        return 'Computer wins! ' + computerChoice + ' beats ' + playerChoice;
    }
    else {
        return 'You win! ' + playerChoice + ' beats ' + computerChoice;
    }
}

function game() {
    for (i=0; i<5; i++) {
    let playerChoice = prompt('Rock, paper or scissor?');
    feedback = playRound(computerPlay(), playerChoice);
    alert(feedback);
    }
}

game();
