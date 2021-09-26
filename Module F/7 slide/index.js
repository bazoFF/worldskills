window.onload = function () {
    const red = document.getElementById('red');
    const green = document.getElementById('green');
    const blue = document.getElementById('blue');
    const desk = document.querySelector('.background');
    const text = document.querySelector('.background__text');

    getStyle()

    red.addEventListener('input', () => {
        countColor('red');
        getStyle();
    })

    green.addEventListener('input', () => {
        countColor('green');
        getStyle();
    })

    blue.addEventListener('input', () => {
        countColor('blue');
        getStyle();
    })

    function countColor (str) {
        switch (str) {
            case 'red':
                red.value;
                break;
            case 'green':
                green.value;
                break;
            case 'blue':
                blue.value;
        }
    }

    function getStyle() {
        desk.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
        text.innerHTML = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    }
}
