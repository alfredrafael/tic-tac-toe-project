'use strict'

// if user click on midde-center-row, then add a value(X/O) to THAT specific index number in gameBoard array

const gameBoard = [
  // 0, 1, 2
  // 3, 4, 5
  // 6, 7, 8
]

// create code so when you click on the div/board, it fires and translate that
const checkForResult = () => {
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
    console.log('Row 1 victory')
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
    console.log('Row 2 victory')
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
    console.log('Row 3 victory')
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
    console.log('Column 1 victory')
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
    console.log('Column 2 victory')
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
    console.log('Column 3 victory')
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
    console.log('Diagonal 1 victory')
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
    console.log('Diagonal 2 victory')
  } else {
    console.log('None of the conditions for winning were found')
  }
}

checkForResult()

// const answerInBoard = ['x', 'o']
