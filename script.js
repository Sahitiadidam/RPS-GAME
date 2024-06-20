let playerType = 'boy';

function setPlayer(type) {
    playerType = type;
    updateChoiceImages();
}

function updateChoiceImages() {
    document.querySelectorAll('.choice-btn').forEach((btn, index) => {
        const choice = ['rock', 'paper', 'scissors'][index];
        btn.src = `${choice}-${playerType}.png`;
    });
}

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Update images
    document.getElementById('human-choice').src = `${userChoice}-${playerType}.png`;
    document.getElementById('human-choice').alt = userChoice;
    document.getElementById('computer-choice').src = `${computerChoice}.png`;
    document.getElementById('computer-choice').alt = computerChoice;

    // Determine the result
    let result = '';

    if (userChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    // Display the result
    const resultText = document.getElementById('result-text');
    resultText.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
    resultText.style.animation = 'none'; // Reset animation
    resultText.offsetHeight; // Trigger reflow
    resultText.style.animation = ''; // Re-apply animation

    // Re-apply slide-in animations
    document.getElementById('human-choice').style.animation = 'none';
    document.getElementById('computer-choice').style.animation = 'none';
    document.getElementById('human-choice').offsetHeight; // Trigger reflow
    document.getElementById('computer-choice').offsetHeight; // Trigger reflow
    document.getElementById('human-choice').style.animation = '';
    document.getElementById('computer-choice').style.animation = '';
}

// Initial image update based on default player type
updateChoiceImages();
