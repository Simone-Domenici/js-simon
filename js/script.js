let correctNumbers;

// Funzione per generare un array di numeri casuali unici da 1 a 50

function generateRandomNumbers() {
    const numbers = new Set();
    while (numbers.size < 5) {
      numbers.add(Math.floor(Math.random() * 50) + 1);
    }

    correctNumbers = Array.from(numbers);
    // console.log(correctNumbers)
    return correctNumbers;
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
          numbersList.classList.toggle('d-none')
          document.getElementById('answers-form').classList.remove('d-none');
        }
    }, 1000);
}

// Funzione di controllo delle risposte

function checkAnswers() {
    const inputElements = document.querySelectorAll('#input-group input');
    const userAnswers = Array.from(inputElements).map(input => parseInt(input.value));

    let correctCount = 0;
    const messageElement = document.getElementById('message');

    if (userAnswers.some(isNaN) || new Set(userAnswers).size !== userAnswers.length) {
        messageElement.textContent = 'Inserisci solo numeri validi e unici.';
        return;
    }

    userAnswers.forEach(answer => {
        if (correctNumbers.includes(answer)) {
          correctCount++;
        }
    });

    messageElement.textContent = `Hai indovinato ${correctCount} numeri su 5.`;
}

// Partenza del gioco all'avvio della pagina

startGame();

document.getElementById('answers-form').addEventListener('submit', (event) => {
    event.preventDefault();
    checkAnswers();
});