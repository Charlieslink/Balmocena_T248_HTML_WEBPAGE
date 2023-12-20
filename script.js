document.getElementById('change-color-button').addEventListener('click', function() {
    changeColor();
});

function changeColor() {
    document.body.style.backgroundColor = getRandomColor();
    document.body.style.color = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}