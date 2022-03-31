console.log('Hello World')
const options = ['rock', 'paper', 'scissors']
let score = [0, 0]
function computerPlay() {
  let randomChoice = Math.random() * 3
  let chosenOption = options[Math.floor(randomChoice)]
  return chosenOption

}





function playRound(playerInput) {
  let compInput = computerPlay()
  console.log(`Computerinput: ${compInput} Playerinput: ${playerInput}`)
  if (compInput === playerInput) {

    return "Tie"

  } else if (compInput == options[0] && playerInput == options[1]) {
    score[0] += 1
    return "Player won"
  } else if (compInput == options[0] && playerInput == options[2]) {
    score[1] += 1
    return `You Lose! Computer beat you with ${compInput}`
  } else if (compInput == options[1] && playerInput == options[2]) {
    score[0] += 1
    return "Player won"
  } else if (compInput == options[1] && playerInput == options[0]) {
    score[1] += 1
    return `You Lose! Computer beat you with ${compInput}`
  } else if (compInput == options[2] && playerInput == options[0]) {
    score[0] += 1
    return "Player won"
  } else if (compInput == options[2] && playerInput == options[1]) {
    score[1] += 1
    return `You Lose! Computer beat you with ${compInput}`
  }
}

function game(x) {
  for (let i = 0; i <= x; i++) {

    let playerInput = window.prompt("Rock, Paper or Scissors")
    console.log(playRound(playerInput))
  }
  alert(`The score is You: ${score[0]}, Computer: ${score[1]}`)
}


game(2)

