let main = document.querySelector(".main");

let fieldOfGame = [
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let gameSpeed = 700;

function drawField() {
    let mainInnerHTML = "";
    for (let y = 0; y < fieldOfGame.length; y++) {
        for (let x = 0; x < fieldOfGame[y].length; x++) {
            if (fieldOfGame[y][x] === 1) {
                mainInnerHTML += "<div class='cell movingCell'></div>";
            } else {
                mainInnerHTML += "<div class='cell'></div>";
            }
        }
    }
    main.innerHTML = mainInnerHTML;
}

function canFigureMoveDown() {
    for (let y = 0; y < fieldOfGame.length; y++) {
        for (let x = 0; x < fieldOfGame[y].length; x++) {
            if (fieldOfGame[y][x] === 1) {
                if (y === fieldOfGame.length - 1) {
                    return false;
                }
            }
        }
    }

    return true;
}

function moveFigureDown() {
    if (canFigureMoveDown()) {
        for (let y = fieldOfGame.length - 1; y >= 0; y--) {
            for (let x = 0; x < fieldOfGame[y].length; x++) {
                if (fieldOfGame[y][x] === 1) {
                    fieldOfGame[y + 1][x] = 1;
                    fieldOfGame[y][x] = 0;
                }
            }
        }
    }
}

function startGame() {
    moveFigureDown()
    drawField()
    setTimeout(startGame, gameSpeed);
}

drawField()
setTimeout(startGame, gameSpeed);
