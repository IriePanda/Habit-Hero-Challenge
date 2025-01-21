 <script>
        const boardSpaces = document.querySelectorAll('#board div');
        const diceResult = document.getElementById('dice-result');
        const currentChallenge = document.getElementById('current-challenge');
        const challengeText = document.getElementById('challenge-text');

        const challenges = [
            "Drink a glass of water in 30 seconds!",
            "Name 3 things you’re grateful for.",
            "Do 10 jumping jacks or stretches.",
            "Compliment someone in the group.",
            "Take 5 deep breaths and relax.",
            "Share one habit you want to improve."
        ];

        let currentPlayerPosition = 0;

        document.getElementById('roll-dice-btn').addEventListener('click', () => {
            const diceRoll = Math.floor(Math.random() * 6) + 1;
            diceResult.textContent = `You rolled a ${diceRoll}!`;

            // Remove active class from current position
            boardSpaces[currentPlayerPosition].classList.remove('active');

            // Update position and ensure it doesn't exceed the board size
            currentPlayerPosition = Math.min(currentPlayerPosition + diceRoll, boardSpaces.length - 1);

            // Add active class to new position
            boardSpaces[currentPlayerPosition].classList.add('active');

            // Show challenge if not at the finish line
            if (currentPlayerPosition < boardSpaces.length - 1) {
                const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
                challengeText.textContent = randomChallenge;
                currentChallenge.classList.remove('hidden');
            } else {
                challengeText.textContent = "Congratulations! You’ve finished the game!";
                currentChallenge.classList.remove('hidden');
            }
        });

        document.getElementById('complete-challenge-btn').addEventListener('click', () => {
            currentChallenge.classList.add('hidden');
        });

        document.getElementById('start-game-btn').addEventListener('click', () => {
            document.getElementById('landing-page').classList.add('hidden');
            document.getElementById('game-setup').classList.remove('hidden');
        });

        document.getElementById('setup-form').addEventListener('submit', (e) => {
            e.preventDefault();
            document.getElementById('game-setup').classList.add('hidden');
            document.getElementById('game-board').classList.remove('hidden');
        });

        document.getElementById('rules-btn').addEventListener('click', () => {
            document.getElementById('rules-modal').classList.remove('hidden');
        });

        document.getElementById('close-rules-btn').addEventListener('click', () => {
            document.getElementById('rules-modal').classList.add('hidden');
        });

        document.getElementById('play-again-btn').addEventListener('click', () => {
            document.getElementById('leaderboard').classList.add('hidden');
            document.getElementById('landing-page').classList.remove('hidden');
        });
    </script>