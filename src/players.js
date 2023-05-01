import { player2, artPlayer, reStartPlayers } from './gameBoard'


export default function makeRandomMove() {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    const result = player2.receiveAttack(num1, num2)
    if (result == 0) makeRandomMove()
}
function start() {
    reStartPlayers()
    for (let i = 5; i > 0; i--) {
        player2.placeShip(i, i + 3, i)
        artPlayer.placeShip(i, i + 3, i)
    }
    console.log(player2.allShips);
    console.log(artPlayer.allShips);
    console.log(player2.map);
    console.log(artPlayer.map);
    console.log(player2.map);
    console.log(artPlayer.map);
    reStartPlayers()
    console.log(player2.map);
    console.log(artPlayer.map);


    // this function recreates players

}
start()
