export const Ship = function (length, hitNumber = 0, sunk = false) {
    function hit() {
        this.hitNumber++
        if (this.hitNumber == this.length) this.sunk = true
    }
    return {
        length, hitNumber, sunk, hit
    }
}

export const fillArray = function (array, length) {
    for (let i = 0; i < length; i++) {
        const element = [];
        array.push(element)
        for (let j = 0; j < length; j++) {
            element[j] = ''
        }
    }
    return array
}
function placeShip(row, col) {
    const newShip = Ship(2)
    const { map } = this
    row -= 1
    col -= 1
    if ((row + newShip.length) > map.length) return console.log('stop');
    for (let i = row; i < (row + newShip.length); i++) {
        map[i][col] = newShip
    }
    this.allShips.push(newShip)
    console.log(map);
}
function receiveAttack(row, col) {
    const { map } = this
    row -= 1
    col -= 1
    if (this.map[row][col] == '') this.map[row][col] = '0'
    if (this.map[row][col] != '' && this.map[row][col] != 0) {
        this.map[row][col].hit();
    }
}
function checkSunk(number = 0) {
    gameBoard.allShips.forEach(item => {
        if (item.sunk == true) number++
    })
    if (number == gameBoard.allShips.length)
        return console.log('all dead');
}

export const GameBoard = function (length) {
    const map = []
    const allShips = []
    fillArray(map, length)
    return {
        length, map, placeShip,
        receiveAttack, allShips, checkSunk
    }
}
const gameBoard = GameBoard(10)
// gameBoard.placeShip(2, 2)
gameBoard.placeShip(10, 4)
// gameBoard.receiveAttack(2, 2)
// gameBoard.receiveAttack(4, 4)
// gameBoard.checkSunk()
