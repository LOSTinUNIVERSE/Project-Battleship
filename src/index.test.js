import { checkPlayers } from 'globalthis/implementation';
import { Ship, fillArray, GameBoard } from './gameBoard';

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



