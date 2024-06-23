document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  let memory = 0;
  let current = '0';
  let operator = null;

  function updateDisplay() {
    display.innerText = current;
  }

  function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
  }

  document.querySelectorAll('#calculator button').forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.innerText;

      if (!isNaN(parseFloat(value)) || value === '.') {
        if (current === '0') {
          current = value;
        } else {
          current += value;
        }
      } else if (value === 'C') {
        current = '0';
        operator = null;
      } else if (value === '=') {
        if (operator && current !== '0') {
          const result = eval(`${memory} ${operator} ${parseFloat(current)}`);
          current = result.toString();
          operator = null;
        }
      } else if (value === '+/-') {
        current = (parseFloat(current) * -1).toString();
      } else if (value === 'M+') {
        memory += parseFloat(current);
      } else if (value === 'M-') {
        memory -= parseFloat(current);
      } else if (value === 'MR') {
        current = memory.toString();
      } else if (value === 'MC') {
        memory = 0;
      } else if (value === '√') {
        current = Math.sqrt(parseFloat(current)).toString();
      } else if (value === '%') {
        current = (parseFloat(current) / 100).toString();
      } else if (value === 'CE') {
        current = '0';
      } else if (value === 'log') {
        current = Math.log10(parseFloat(current)).toString();
      } else if (value === 'ln') {
        current = Math.log(parseFloat(current)).toString();
      } else if (value === 'sin') {
        current = Math.sin(parseFloat(current)).toString();
      } else if (value === 'cos') {
        current = Math.cos(parseFloat(current)).toString();
      } else if (value === 'tan') {
        current = Math.tan(parseFloat(current)).toString();
      } else if (value === 'ctg') {
        current = (1 / Math.tan(parseFloat(current))).toString();
      } else if (value === 'toBin') {
        current = parseFloat(current).toString(2);
      } else if (value === 'toHex') {
        current = parseFloat(current).toString(16);
      } else if (value === 'toOct') {
        current = parseFloat(current).toString(8);
      } else if (value === 'and') {
        operator = '&';
        memory = parseFloat(current);
        current = '0';
      } else if (value === 'or') {
        operator = '|';
        memory = parseFloat(current);
        current = '0';
      } else if (value === 'xor') {
        operator = '^';
        memory = parseFloat(current);
        current = '0';
      } else if (value === 'not') {
        current = (~parseFloat(current)).toString();
      } else if (value === '^2') {
        current = Math.pow(parseFloat(current), 2).toString();
      } else if (value === '1/x') {
        current = (1 / parseFloat(current)).toString();
      } else if (value === '!') {
        current = factorial(parseFloat(current)).toString();
      } else {
        operator = value;
        memory = parseFloat(current);
        current = '0';
      }

      updateDisplay();
    });
  });

  updateDisplay();
});
