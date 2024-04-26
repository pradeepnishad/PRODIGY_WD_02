// JavaScript logic for the stopwatch
        const hrDisplay = document.getElementById('hr');
        const minDisplay = document.getElementById('min');
        const secDisplay = document.getElementById('sec');
        const countDisplay = document.getElementById('count');

        let timerInterval;
        let totalMilliseconds = 0;

        function updateDisplay() {
            const hours = Math.floor(totalMilliseconds / 3600000);
            const minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
            const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
            const milliseconds = totalMilliseconds % 1000;

            hrDisplay.textContent = hours.toString().padStart(2, '0');
            minDisplay.textContent = minutes.toString().padStart(2, '0');
            secDisplay.textContent = seconds.toString().padStart(2, '0');
            countDisplay.textContent = milliseconds.toString().padStart(2, '0');
        }

        document.getElementById('start').addEventListener('click', () => {
            clearInterval(timerInterval);
            timerInterval = setInterval(() => {
                totalMilliseconds += 10;
                updateDisplay();
            }, 10);
        });

        document.getElementById('stop').addEventListener('click', () => {
            clearInterval(timerInterval);
        });

        document.getElementById('reset').addEventListener('click', () => {
            clearInterval(timerInterval);
            totalMilliseconds = 0;
            updateDisplay();
        });