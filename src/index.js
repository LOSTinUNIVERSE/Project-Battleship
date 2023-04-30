export const Ship = function (length, hitNumber, sunk) {
    function isSunk() {
        if (this.hitNumber == this.length) return this.sunk = true
    }

    function hit() {
        this.hitNumber++
    }
    return {
        length, hitNumber, sunk, hit, isSunk
    }
}
const newShip = Ship(1, 0, false)

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
function receiveAttack(row, col) {
    const { map } = this
    row -= 1
    col -= 1
    if (this.map[row][col] == '') this.map[row][col] = '0'
    if (this.map[row][col] != '' && this.map[row][col] != 0) {
        this.map[row][col].hit();
    }
}

export const GameBoard = function (length) {
    const map = []
    fillArray(map, length)
    return { length, map, placeShip, receiveAttack, checkBoard }
}
const gameBoard = GameBoard(10)
gameBoard.placeShip(2, 2)
gameBoard.receiveAttack(2, 5)
// gameBoard.checkBoard()
// function checkBoard() {
    // this.map.forEach(item => {
        // item.forEach(element => {
            // if (element != '' && element != 0) {
                // element.hit()
                // if (element.isSunk()) {
                    // console.log(element);
// 
                // }
            // }
        // }
        // )
    // });
// }
