 <script>
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

        document.getElementById('roll-dice-btn').addEventListener('click', () => {
            const diceRoll = Math.floor(Math.random() * 6) + 1;
            document.getElementById('dice-result').textContent = `You rolled a ${diceRoll}!`;
        });

        document.getElementById('play-again-btn').addEventListener('click', () => {
            document.getElementById('leaderboard').classList.add('hidden');
            document.getElementById('landing-page').classList.remove('hidden');
        });
    </script>