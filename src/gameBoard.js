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
}
function playerChecker(player, map) {
    if (player == player1) {
        player1.myTurn = false
        player2.myTurn = true
    }
    if (player == player2) {
        player2.myTurn = false
        player1.myTurn = true
    }
}
function receiveAttack(row, col) {
    if (this.myTurn == false) return
    playerChecker(this)
    const { map } = this
    console.log(map);
    row -= 1
    col -= 1
    if (map[row][col] == 0) console.log('occupied');
    if (map[row][col] == '') map[row][col] = '0'
    if (map[row][col] != '' && map[row][col] != 0) {
        map[row][col].hit();
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
    const myTurn = true
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
player2.receiveAttack(2, 2)
player1.receiveAttack(4, 4)
player2.receiveAttack(4, 4)
