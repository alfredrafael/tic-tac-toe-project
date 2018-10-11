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

let gameOver = false

const clearBoard = function () {
  for (let i = 0; i < 9; i++) { // meaning, the amount of cells, inside of game, isnde of store, threfore: 9 
    $(`#game-box-${i}`).html('')
  }
  createNewGame()
}

const showStatsEvent = function () {
  event.preventDefault()
  ajaxCalls.showStatsAjaxCall()
    .then(userInterface.showStatsAtUserInterface)
    .catch(userInterface.showStatsErrorMessage)
}

const createNewGame = () => {
  // const myCurrentBox = event.target
  store.game = {}
  store.toggleTurn = 0
  gameOver = false
  $('.tic-box').on('click', clickedBox)

  showStatsEvent()

  ajaxCalls.createNewGameAjaxCall()
    .then(userInterface.createNewGameSuccess)
    .catch(userInterface.createNewGameFailure)
}


const updateGame = function (dataToUpdateGameApi) {
  ajaxCalls.updateGameAjaxCall(dataToUpdateGameApi)
    .then(userInterface.updateGameSuccess)
    .catch(userInterface.updateGameFailure)
}

const clickedBox = function (event) {
  const currentBox = event.target
  const index = $(event.target).data('index')
  console.log(currentBox)
  // console.log(store.game.cells)
  if (store.toggleTurn % 2 === 0) {
    $(currentBox).text('X')
    store.game.cells[index] = 'X'
  } else {
    $(currentBox).text('O')
    store.game.cells[index] = 'O'
  }

  console.log(store.game)

  dataToUpdateGameApi.game.cell.index = index // lets store the value of game.cell.index into 'i'
  dataToUpdateGameApi.game.cell.value = store.game.cells[index]

  ajaxCalls.updateGameAjaxCall(dataToUpdateGameApi)
  checkForResult()
  store.toggleTurn++

  $(currentBox).off()
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
    $('#display-game-message').text(`${store.game.cells[0]} wins the game`)
    gameOver = true

  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] && store.game.cells[4] !== '') {
    $('#display-game-message').text(`${store.game.cells[3]} wins the game`)
    gameOver = true

  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[7] !== '') {
    $('#display-game-message').text(`${store.game.cells[6]} wins the game`)
    gameOver = true

  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] && store.game.cells[3] !== '') {
    $('#display-game-message').text(`${store.game.cells[0]} wins the game`)
    gameOver = true

  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] && store.game.cells[7] !== '') {
    $('#display-game-message').text(`${store.game.cells[1]} wins the game`)
    gameOver = true

  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] && store.game.cells[5] !== '') {
    $('#display-game-message').text(`${store.game.cells[2]} wins the game`)
    gameOver = true

  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] && store.game.cells[4] !== '') {
    $('#display-game-message').text(`${store.game.cells[0]} wins the game`)
    gameOver = true

  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] && store.game.cells[4] !== '') {
    $('#display-game-message').text(`${store.game.cells[2]} wins the game`)
    gameOver = true

  } else if (store.toggleTurn >= 8) {
    $('#display-game-message').html('Its a Tie')
    gameOver = true

  } else {
    $('#display-game-message').html('Game in progress')
    gameOver = false
  }

  if (gameOver === true) { // this conditional runs regardless of what happen in the previeous stements
    for (let i = 0; i < 9; i++) { // iterate all the way thru 9...
      $(`#game-box-${i}`).off() // turn those game-boxes off...
    }
  }
}

module.exports = {
  clickedBox,
  updateGame,
  checkForResult,
  createNewGame,
  clearBoard,
  showStatsEvent
}
