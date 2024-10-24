// Funzione per generare un array di numeri casuali unici da 1 a 50

function generateRandomNumbers() {
    const numbers = new Set();
    while (numbers.size < 5) {
      numbers.add(Math.floor(Math.random() * 50) + 1);
    }
    return Array.from(numbers);
  }
console.log(generateRandomNumbers())