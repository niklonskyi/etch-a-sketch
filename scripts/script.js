let squareContainer = document.querySelector('div.squares-container')
let sizeSlider = document.querySelector('#size-of-container')
let size = 10;
let dimension = `${squareContainer.clientWidth/size}px`;
let sizeH3 = document.querySelector('#size-h3');
let colors = document.querySelectorAll('.color');
let colorValue = `classic`;

sizeSlider.addEventListener('input', function (){
    size = this.value;
    dimension = `${squareContainer.clientWidth/size}px`;
    squareContainer.innerHTML = '';
    createGrid(size, dimension);
})

for (let color of colors) {
    color.addEventListener('click', function (){
        colorValue = this.value;
    })
}

function createGrid(size, dimension) {
    sizeH3.textContent = `${size} x ${size}`;
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        let opacity = 0.1;
        square.addEventListener('mouseover', function (e) {
            if (colorValue === 'classic'){
                opacity += 0.1;
                e.currentTarget.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
            }
            else if (colorValue === 'colorful'){
                e.currentTarget.style.opacity = '0.8';
                e.currentTarget.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            }
        }, false)
        square.style.width = dimension;
        square.style.height = dimension;
        squareContainer.appendChild(square);
    }
}

createGrid(size, dimension)