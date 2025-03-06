export function calculator() {
  console.log('calculator works');

  const calculatorInput = document.querySelector('.calculatorInput');
  const calculatorNumbers = document.querySelectorAll('.calculatorButtonNumber');
  const calculatorReset = document.querySelector('.reset');
  const calculatorEval = document.querySelector('.eval');

  calculatorNumbers.forEach(calculatorNumber => {
    calculatorNumber.addEventListener('click', () => {
      if (
        typeof calculatorInput.value !== 'number' &&
        !calculatorNumber.classList.contains('eval')
      ) {
        calculatorInput.value =
          calculatorInput.value + calculatorNumber.textContent;
      }
    });
  });

  calculatorEval.addEventListener('click', () => {
    const result = eval(calculatorInput.value);
    calculatorInput.value = result;
  });

  calculatorReset.addEventListener('click', () => {
    calculatorInput.value = '';
  });
}
