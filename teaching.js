var input = document.querySelector('.input');
var box = document.querySelector('.box');

input.addEventListener('change', function () {
    box.style.gridAutoRows = this.value + 'px';
}, false);