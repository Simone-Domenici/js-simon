// Funzione per generare un array di numeri casuali unici da 1 a 50

function generateRandomNumbers() {
    const numbers = new Set();
    while (numbers.size < 5) {
      numbers.add(Math.floor(Math.random() * 50) + 1);
    }
    return Array.from(numbers);
  }
// console.log(generateRandomNumbers())

// Funzione per visualizzare i numeri nel DOM

function startGame() {
    const numbersList = document.getElementById('numbers-list');
    const numbers = generateRandomNumbers();
    numbers.forEach(number => {
      const li = document.createElement('li');
      li.textContent = number;
      numbersList.appendChild(li);
})

// startGame()

// Countdown

    const countdown = document.getElementById('countdown');
      let timeLeft = 30;

      const countdownInterval = setInterval(() => {
        countdown.textContent = timeLeft;
        timeLeft--;

        if (timeLeft < 0) {
          clearInterval(countdownInterval);
          numbersList.style.display = 'none';
          document.getElementById('answers-form').classList.remove('d-none');
        }
    }, 1000);
}

// startGame()

