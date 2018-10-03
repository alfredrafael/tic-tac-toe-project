'use strict'

const ajaxCalls = require(`../api.js`)
const userInterface = require(`../ui.js`)
const store = require('../store')

const gameBoard = ['', '', '', '', '', '', '', '', ''
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

const createNewGame = () => {
  console.log('The create new game function fired')
  store.game = {}
  store.toggleTurn = 0

  ajaxCalls.createNewGameAjaxCall()
    .then(userInterface.createNewGameSuccess)
    .catch(userInterface.createNewGameFailure)
}

const clearBoard = function () {
  for (let i = 0; i < gameBoard.length; i++) {
    $(`#game-box-${i}`).html('')
    createNewGame()
  }
}

const updateGame = function (dataToUpdateGameApi) {
  ajaxCalls.updateGameAjaxCall(dataToUpdateGameApi)
    .then(userInterface.updateGameSuccess)
    .catch(userInterface.updateGameFailure)
}

/*
const clearBoard = function () {
  if (checkForResult) {
    for (let i = 0; i < 9; i++) {
      $().val('')
    }
  }
}
*/


const clickedBox = function (i) {
  // alert('a box was clicked')
  console.log(store.game.cells)
  if (store.toggleTurn % 2 === 0) {
    $(`#game-box-${i}`).text('X')
    store.game.cells[i] = 'X'
  } else {
    $(`#game-box-${i}`).text('O')
    store.game.cells[i] = 'O'
  }
  // $(`#game-box-${i}`).attr('disabled', true)
  console.log(store.game)
  dataToUpdateGameApi.game.cell.index = i // lets store the value of game.cell.index into 'i'
  dataToUpdateGameApi.game.cell.value = gameBoard[i]

  ajaxCalls.updateGameAjaxCall(dataToUpdateGameApi)
  checkForResult()
  store.toggleTurn++
}
// create code so when you click on the div/board, it fires and translate that
const checkForResult = () => {
  console.log(gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2])
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
    $('#display-game-message').text('Victory row 1')
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
    $('#display-game-message').html('Victory row 2')
    console.log('Row 2 victory')
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
    $('#display-game-message').html('Victory row 3')
    console.log('Row 3 victory')
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
    console.log('Column 1 victory')
    $('#display-game-message').html('Victory column 1')
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
    console.log('Column 2 victory')
    $('#display-game-message').html('Column 2 victory')
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
    console.log('Column 3 victory')
    $('#display-game-message').html('Column 3 victory')
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
    console.log('Diagonal 1 victory row')
    $('#display-game-message').html('Diagonal 1 victory row')
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
    console.log('Diagonal 2 victory')
    $('#display-game-message').html('Diagonal 2 victory')
  } else {
    $('#display-game-message').html('None of the conditions for winning were found')
    console.log('None of the conditions for winning were found')
  }
}

// If there are 9 moves 'store.toggle >= 9'... 'its a tie... '
// then...make the checkForResult() connect to the UI

module.exports = {
  clickedBox,
  updateGame,
  checkForResult,
  gameBoard,
  createNewGame,
  clearBoard
}
