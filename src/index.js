export const Ship = function (length, hitNumber, sunk) {
    function isSunk() {
        if (this.hitNumber == this.length) this.sunk = true
    }
    function hit() { return this.hitNumber++ }
    return {
        length, hitNumber, sunk, hit, isSunk
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


export const GameBoard = function (length) {
    const array = []
    fillArray(array, length)
    return { length, array }
}
const gameBoard = GameBoard(10)
console.log(gameBoard);