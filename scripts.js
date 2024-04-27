// JavaScript logic for the stopwatch
        const hrDisplay = document.getElementById('hr');
        const minDisplay = document.getElementById('min');
        const secDisplay = document.getElementById('sec');
        const countDisplay = document.getElementById('count');

        let timerInterval;
        let totalMilliseconds = 0;
        let lapTimes = [];

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

        function updateLapList() {
            const lapList = document.getElementById("lapList");
            lapList.innerHTML = "";
            lapTimes.forEach((lap, index) => {
                const li = document.createElement("li");
                li.textContent = `Lap ${index + 1}: ${lap}`;
                lapList.appendChild(li);
            });
        }

        document.getElementById('stop').addEventListener('click', () => {
            clearInterval(timerInterval);
            if (totalMilliseconds > 0) {
                const formattedTime = new Date(totalMilliseconds).toISOString().substr(11, 8);
                lapTimes.push(formattedTime);
                updateLapList();
            }
        });

        document.getElementById('reset').addEventListener('click', () => {
            clearInterval(timerInterval);
            totalMilliseconds = 0;
            lapTimes = [];
            updateDisplay();
            updateLapList();
        });