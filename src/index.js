const Ship = function (length, hitNumber, sunk) {
    function hit() { this.hitNumber++ }
    return {
        length, hitNumber, sunk, hit
    }
}
const ship1 = Ship(8, 0, false)
ship1.hit()
