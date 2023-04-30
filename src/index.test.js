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
test('test fillArray function ', () => {
    const gameBoard = GameBoard(10)

    expect(gameBoard.placeShip()).toEqual(3)
})

