let display = document.getElementById('display');
let historyDisplay = document.getElementById('history');
let expression = '';

function appendValue(value) {
  expression += value;
  display.value = expression;
  historyDisplay.innerText = expression;
}

function clearDisplay() {
  expression = '';
  display.value = '';
  historyDisplay.innerText = '';
}

function deleteLast() {
  expression = expression.slice(0, -1);
  display.value = expression;
  historyDisplay.innerText = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    display.value = result;
    historyDisplay.innerText = expression + ' = ' + result;
    expression = result.toString();
  } catch {
    display.value = 'Error';
  }
}

document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (!isNaN(key) || "+-*/.%".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    e.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});

function toggleTheme() {
  document.body.classList.toggle('light');
}
