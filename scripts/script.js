const COLOR_VALUE = `classic`;
const SIZE = 10;

let squareContainer = document.querySelector('div.squares-container')
let sizeSlider = document.querySelector('#size-of-container')
let sizeH3 = document.querySelector('#size-h3');
let colorButtons = document.querySelectorAll('.color');
let resetButton = document.querySelector('.reset')

let size = SIZE;
let colorValue = COLOR_VALUE;
let dimension = `${squareContainer.clientWidth/size}px`;

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function clearContainer(){
    squareContainer.innerHTML = '';
}

function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return
    if (colorValue === 'classic') {
        e.currentTarget.style.backgroundColor = `rgba(0, 0, 0, 1)`;
    } else if (colorValue === 'colorful') {
        e.currentTarget.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    } else {
        e.currentTarget.style.backgroundColor = `#${Math.floor(Math.random() * (16724732 - 16711680) + 16711680).toString(16)}`;
    }
}

function createGrid(numberOfSquares, sizeOfSquare) {
    sizeH3.textContent = `${numberOfSquares} x ${numberOfSquares}`;
    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = sizeOfSquare;
        square.style.height = sizeOfSquare;
        squareContainer.appendChild(square);
    }
    let squares = document.querySelectorAll('.square');
    squareListeners(squares);
}

function squareListeners(squares){
    for (const square of squares) {
        square.addEventListener('mouseover', changeColor)
        square.addEventListener('mousedown', changeColor)
    }
}

function clearCurrent(currents){
    for (let current of currents) {
        current.classList.remove('current');
    }
}


resetButton.addEventListener('click', function () {
    clearContainer();
    createGrid(size, dimension);
});

sizeSlider.addEventListener('input', function (){
    size = this.value;
    dimension = `${squareContainer.clientWidth/size}px`;
    clearContainer();
    createGrid(size, dimension);
})

for (let color of colorButtons) {
    color.addEventListener('click', function (){
        clearCurrent(colorButtons);
        color.classList.add('current');
        colorValue = this.value;
    })
}

createGrid(size, dimension)
