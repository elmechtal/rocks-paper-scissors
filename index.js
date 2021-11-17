    const feedbackElement = document.querySelector('.feedback');
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let playerChoice = e.target.id;
            let feedback = playRound(computerPlay(), playerChoice);
            feedbackElement.innerText = feedback;
        });
    });

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

