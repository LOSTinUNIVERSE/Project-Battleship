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
    const newShip = Ship(1)
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
//! we are here, added this if statement, eventhough without pseudo code
//! I need to make a pseudo code or think about it 
function receiveAttack(row, col) {

    if (player1.myTurn == false) {
        console.log('not your turn')
        return player2.myTurn == true
    }
    if (player2.myTurn == false) {
        console.log('not your turn')
        return player1.myTurn == true
    }
    if (player1.myTurn == false) player2.myTurn = true
    if (player2.myTurn == false) player1.myTurn = true
    console.log('to here');
    const { map } = this
    row -= 1
    col -= 1
    if (this.map[row][col] == '') this.map[row][col] = '0'
    if (this.map[row][col] != '' && this.map[row][col] != 0) {
        this.map[row][col].hit();
    }
}
function checkSunk(number = 0) {
    this.allShips.forEach(item => {
        if (item.sunk == true) number++
    })
    if (number == this.allShips.length)
        return console.log('all dead');
}

export const GameBoard = function (length) {
    const map = []
    const myTurn = false
    const allShips = []
    fillArray(map, length)
    return {
        length, map, placeShip,
        receiveAttack, allShips, checkSunk,
        myTurn
    }
}
const player1 = GameBoard(10)
const player2 = GameBoard(10)
console.log(player1.length);
console.log(player2.length);

player1.placeShip(4, 4)
player1.placeShip(2, 2)
player1.receiveAttack(2, 2)
player1.receiveAttack(4, 4)
// player1.checkSunk()
// console.log(player1);
