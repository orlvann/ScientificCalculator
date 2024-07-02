document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const toggleModeButton = document.getElementById('toggleMode');
  let memory = 0;
  let current = '0';
  let operator = null;
  let mode = 'DEG';
  function updateDisplay() {
    display.innerText = current;
  }

  function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
  }

  function toRadians(angle) {
    return mode === 'DEG' ? angle * (Math.PI / 180) : angle;
  }

  function toggleMode() {
    mode = mode === 'DEG' ? 'RAD' : 'DEG';
    updateToggleButton();
    updateDisplay();
  }

  function updateToggleButton() {
    toggleModeButton.innerText = mode;
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
        try {
          if (operator && current !== '0') {
            if (operator === '/' && parseFloat(current) === 0) {
              throw new Error('Division by zero');
            }
            const result = eval(`${memory} ${operator} ${parseFloat(current)}`);
            current = result.toString();
            operator = null;
          }
        } catch (error) {
          current = 'Error';
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
        try {
          if (parseFloat(current) < 0) throw new Error('Invalid input for √');
          current = Math.sqrt(parseFloat(current)).toString();
        } catch (error) {
          current = 'Error';
        }
      } else if (value === '%') {
        current = (parseFloat(current) / 100).toString();
      } else if (value === 'CE') {
        current = '0';
      } else if (value === 'log') {
        try {
          if (parseFloat(current) <= 0)
            throw new Error('Invalid input for log');
          current = Math.log10(parseFloat(current)).toString();
        } catch (error) {
          current = 'Error';
        }
      } else if (value === 'ln') {
        try {
          if (parseFloat(current) <= 0) throw new Error('Invalid input for ln');
          current = Math.log(parseFloat(current)).toString();
        } catch (error) {
          current = 'Error';
        }
      } else if (value === 'sin') {
        current = Math.sin(toRadians(parseFloat(current))).toString();
      } else if (value === 'cos') {
        current = Math.cos(toRadians(parseFloat(current))).toString();
      } else if (value === 'tan') {
        current = Math.tan(toRadians(parseFloat(current))).toString();
      } else if (value === 'ctg') {
        try {
          if (Math.tan(toRadians(parseFloat(current))) === 0)
            throw new Error('Invalid input for ctg');
          current = (1 / Math.tan(toRadians(parseFloat(current)))).toString();
        } catch (error) {
          current = 'Error';
        }
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
        try {
          if (parseFloat(current) === 0) throw new Error('Division by zero');
          current = (1 / parseFloat(current)).toString();
        } catch (error) {
          current = 'Error';
        }
      } else if (value === '!') {
        try {
          if (parseFloat(current) < 0 || !Number.isInteger(parseFloat(current)))
            throw new Error('Invalid input for factorial');
          current = factorial(parseFloat(current)).toString();
        } catch (error) {
          current = 'Error';
        }
      } else if (value === 'Deg/Rad' || value === 'DEG' || value === 'RAD') {
        toggleMode();
      } else {
        operator = value;
        memory = parseFloat(current);
        current = '0';
      }

      updateDisplay();
    });
  });

  updateToggleButton();
  updateDisplay();
});
