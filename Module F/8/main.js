const btnEl = document.getElementById('container-button');
const resultEl = document.getElementById('container-par');
const inputEl = document.getElementById('input-value');

function square(inputValue) {
    const values = inputValue.split(' ');
    const oddValues = values.filter(value => value % 2 === 1);

    if (oddValues.length === 0) {
        return 'В массиве нет нечетных элементов';
    }

    const squares = oddValues.map(value => Math.pow(value, 2));
    const result = squares.reduce((result, valueSquare) => result + valueSquare, 0);

    return result === undefined ? 'Неправильный ввод данных' : result;
}

btnEl.addEventListener('click', function () {
    resultEl.innerHTML = square(inputEl.value);
    inputEl.value = null;
});

