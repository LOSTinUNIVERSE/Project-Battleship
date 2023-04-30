export const Ship = function (length, hitNumber, sunk) {
    function isSunk() {
        if (this.hitNumber == this.length) this.sunk = true
    }

    function hit() { return this.hitNumber++ }
    return {
        length, hitNumber, sunk, hit, isSunk
    }
}
const newShip = Ship(3, 0, false)

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
    const { map } = this
    row -= 1
    col -= 1
    for (let i = row; i < (row + newShip.length); i++) {
        map[i][col] = newShip
    }
}
export const GameBoard = function (length) {
    const map = []
    fillArray(map, length)
    return { length, map, placeShip }
}
const gameBoard = GameBoard(10)
gameBoard.placeShip(2, 2)
console.log(gameBoard.map);
