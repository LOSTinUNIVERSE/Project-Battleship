import { Ship, fillArray } from './index';

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
// test('test array', () => {
//     const array = []
//     const result = fillArray(array, 3)
//     expect(let res).toBe( == 3)
// })

