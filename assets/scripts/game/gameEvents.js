'use strict'

const ajaxCalls = require(`../api.js`)
const userInterface = require(`../ui.js`)
const store = require('../store')

const dataToUpdateGameApi = {
  'game': {
    'cell': {
      'index': '',
      'value': ''
    },
    'over': false
  }
}

let gameOver = false; /////////////////////////////////////////////////////////

const clearBoard = function () {
  for (let i = 0; i < 9; i++) { // meaning, the amount of cells, inside of game, isnde of store, threfore: 9 
    $(`#game-box-${i}`).html('')
  }
  createNewGame()

}

const showStatsEvent = function () {////////////////////////////////
  event.preventDefault()
  ajaxCalls.showStatsAjaxCall()
    .then(userInterface.showStatsAtUserInterface)
    .catch(userInterface.showStatsErrorMessage)
}

const createNewGame = () => {
  store.game = {}
  store.toggleTurn = 0
  gameOver = false //////////////////////////////////////////////////////////
  // showStatsEvent() //////////////////////////////////////////////////////////

  ajaxCalls.createNewGameAjaxCall()
    .then(userInterface.createNewGameSuccess)
    .catch(userInterface.createNewGameFailure)
}


const updateGame = function (dataToUpdateGameApi) {
  ajaxCalls.updateGameAjaxCall(dataToUpdateGameApi)
    .then(userInterface.updateGameSuccess)
    .catch(userInterface.updateGameFailure)
}

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
  // $(`#game-box-${i}`).attr('disabled', true) ////////////////////////////////////////////
  console.log(store.game)
  dataToUpdateGameApi.game.cell.index = i // lets store the value of game.cell.index into 'i'
  dataToUpdateGameApi.game.cell.value = store.game.cells[i]

  ajaxCalls.updateGameAjaxCall(dataToUpdateGameApi)
  checkForResult()
  store.toggleTurn++

  // $('.top-left-row-0').off() ///////////////////////////////////////////////////////////

}

/*
const gameBoard = ['', '', '', '', '', '', '', '', ''
  // 0, 1, 2
  // 3, 4, 5
  // 6, 7, 8
]
*/

// create code so when you click on the div/board, it fires and translate that
const checkForResult = () => {
  console.log(store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2])
  console.log(store.game.cells)
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2] && store.game.cells[1] !== '') {
    $('#display-game-message').text('Victory row 1')
    gameOver = true

  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] && store.game.cells[4] !== '') {
    $('#display-game-message').html('Victory row 2')
    gameOver = true

  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[7] !== '') {
    $('#display-game-message').html('Victory row 3')
    gameOver = true

  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] && store.game.cells[3] !== '') {
    gameOver = true

    $('#display-game-message').html('Victory column 1')
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] && store.game.cells[7] !== '') {
    gameOver = true

    $('#display-game-message').html('Column 2 victory')
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] && store.game.cells[5] !== '') {
    $('#display-game-message').html('Column 3 victory')
    gameOver = true

  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] && store.game.cells[4] !== '') {
    $('#display-game-message').html('Diagonal 1 victory row')
    gameOver = true

  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] && store.game.cells[4] !== '') {
    $('#display-game-message').html('Diagonal 2 victory')
    gameOver = true
  } else if (store.toggleTurn >= 8) {
    $('#display-game-message').html('Its a Tie')
    gameOver = true
  } else {
    $('#display-game-message').html('Game in progress')
    gameOver = false
  }
}

module.exports = {
  clickedBox,
  updateGame,
  checkForResult,
  createNewGame,
  clearBoard,
  showStatsEvent ////////////////////////////////////////////////////////////////////
}
