import { Ship, fillArray, GameBoard } from './index';

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



