//
// helloWorld();
//
//
// function helloWorld() {
//     console.log(inputEl.value);
// }

const btn = document.getElementById('container-button')
const p = document.getElementById('container-par')

function square (arr) {
    let result;
    let newArr = arr.split(' ')

    result = newArr.filter(function (elm) {
        return elm%2 === 1
    })
    if (result.length === 0) {
        return "В массиве нет нечетных элементов"
    }
    result = result.map(function (elm) {
        return Math.pow(elm, 2)
    }).map(i=>x+=i, x=0)                 // Разобрать, спросить, узнать
        .reverse()[0]

    if (result === undefined) {
        return "Неправильный ввод данных"
    }

    return result;
}

btn.onclick = function () {
    let val = document.getElementById('input-value').value
    p.innerHTML = square(val)
    val.innerHTML = " "
}

