let squareContainer = document.querySelector('div.squares-container')
let sizeButton = document.querySelector('#size-of-container')
let size = 10;
let dimension = `${squareContainer.clientWidth/size}px`;

sizeButton.addEventListener('click', function (){
    size = prompt('Input a number of squares:');
    squareContainer.innerHTML = '';
    dimension = `${squareContainer.clientWidth/size}px`;
    createGrid(size, dimension)
})


function createGrid(size, demension) {
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', function (e) {
            e.currentTarget.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        }, false)
        square.style.width = demension;
        square.style.height = demension;
        squareContainer.appendChild(square);
    }
}

createGrid(size, dimension)