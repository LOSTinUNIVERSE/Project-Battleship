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
function placeShip(row, col, length = 1) {
    const newShip = Ship(length)
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
    if (player == artPlayer) {
        artPlayer.myTurn = false
        player2.myTurn = true
    }
    if (player == player2) {
        player2.myTurn = false
        artPlayer.myTurn = true
    }
}
export function receiveAttack(row, col) {
    console.log(row, col);
    if (this.myTurn == false) return
    playerChecker(this)
    const { map } = this
    row -= 1
    col -= 1
    if (map[row][col] == '0') {
        console.log('to 0')
        return 0
    }
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
let artPlayer = ''
let player2 = ''
export function reStartPlayers() {
    artPlayer = GameBoard(10)
    player2 = GameBoard(10)
}

export { artPlayer, player2 }


