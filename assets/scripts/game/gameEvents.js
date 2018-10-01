'use strict'

const ajaxCalls = require(`../api.js`)
const userInterface = require(`../ui.js`)

const gameBoard = [ '', '', '', '', '', '', '', '', ''
  // 0, 1, 2
  // 3, 4, 5
  // 6, 7, 8
]

const dataToUpdateGameApi = {
  'game': {
    'cell': {
      'index': '',
      'value': ''
    },
    'over': false
  }
}

const updateGame = function (dataToUpdateGameApi) {
  ajaxCalls.updateGameAjaxCall(dataToUpdateGameApi)
    .then(userInterface.updateGameSuccess)
    .catch(userInterface.updateGameFailure)
}

let toggleTurn = 0

const clickedBox = function () {
  alert('a box was clicked')
  for (let i = 0; i < gameBoard.length; i++) {
    $('# ' + i).click(function () {
      if (toggleTurn % 2 === 0) {
        $(this).text('X')
        gameBoard[this.id] === 'X'
        $(this).attr('disabled', true)
      } else {
        $(this).text('O')
        gameBoard[this.id]
        $(this).attr('disabled', true)
      }
      dataToUpdateGameApi.game.cell.index = this.id
      dataToUpdateGameApi.game.cell.value = gameBoard[this.id]
      checkForResult()
      updateGameEvent(dataToUpdateGameApi)
      toggleTurn++
    })
  }
}
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

// checkForResult()

module.exports = {
  clickedBox,
  updateGame,
  checkForResult
}
