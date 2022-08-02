let squareContainer = document.querySelector('.squares_container')


for (let i = 0; i < 16*16; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = Math.floor(Math.random()*16777215).toString(16);
    square.addEventListener('mouseover', function (e) {
        e.currentTarget.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    }, false)
    square.classList.add('square');
    squareContainer.appendChild(square);

}