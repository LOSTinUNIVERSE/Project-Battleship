import { Ship, fillArray, GameBoard, player2, artPlayer } from './gameBoard';

test('test hitNumber', () => {
    const ship = Ship(1, 0, false)
    expect(ship.hitNumber).toEqual(0)
    ship.hit()
    expect(ship.hitNumber).toEqual(1)
})
test('test sunk', () => {
    const ship = Ship(1, 0, false)
    expect(ship.sunk).toBe(false)
})
test('test fillArray function ', () => {
    const array = []
    const result = fillArray(array, 3)
    expect(result.length).toBe(3)
})

test('test receiveAttack function ', () => {
    const gameBoard = GameBoard(10)
    const ship = Ship(1, 0, false)
    gameBoard.placeShip(2, 2)
    function receiveAttack(row, col) {
        const { map } = this
        if (this.map[row][col] == '') this.map[row][col] = 'missed'
        if (this.map[row][col] != '') this.map[row][col] = 'not missed'
    }
    gameBoard.receiveAttack = receiveAttack
    gameBoard.receiveAttack(2, 2)
    expect(gameBoard.map[2][2]).toBe('not missed')
})
test('test fillArray function ', () => {
    const gameBoard = GameBoard(10)
    gameBoard.placeShip(2, 2)
    gameBoard.allShips[0].hit()
    expect(gameBoard.allShips.length).toBe(1)
    function checkSunk(number = 0) {
        gameBoard.allShips.forEach(item => {
            if (item.sunk == true) number++
        })
        if (number == gameBoard.allShips.length) {
            console.log('all dead');
            return 1
        }
    }
    expect(checkSunk()).toBe(1)
})
test('test random number', () => {
    function randomNum() {
        const num1 = Math.floor(Math.random() * 10) + 1
        return num1
    }
    expect(randomNum()).toBeGreaterThan(1)
    expect(randomNum()).toBeLessThan(11)
})
test('start the game ', () => {
    function start() {
        for (let i = 5; i > 0; i--) {
            player2.placeShip(i + 4, i + 3)
            artPlayer.placeShip(i + 4, i + 3)
        }
        console.log(player2.allShips);
    }
    start()
    expect(player2.allShips.length).toBe(5)
    expect(artPlayer.allShips.length).toBe(5)
})
// test('test random attaack', () => {
//     let n1 = 0
//     let n2 = 0
//     function makeRandomMove() {
//         const num1 = Math.floor(Math.random() * 10) + 1
//         n1 = num1
//         const num2 = Math.floor(Math.random() * 10) + 1
//         n2 = num2
//         console.log(num1, num2);
//         player2.receiveAttack(num1, num2)
//         console.log(player2.map);
//     }
//     expect(player2.map[n1][n2]).toBe('')
// })



