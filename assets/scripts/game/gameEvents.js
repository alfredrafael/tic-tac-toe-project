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

const clearBoard = function () {
  for (let i = 0; i < 9; i++) { // meaning, the amount of cells, inside of game, isnde of store, threfore: 9 
    $(`#game-box-${i}`).html('')
    createNewGame()
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
  // $(`#game-box-${i}`).attr('disabled', true)
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
  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] && store.game.cells[4] !== '') {
    $('#display-game-message').html('Victory row 2')
    console.log('Row 2 victory')
  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[7] !== '') {
    $('#display-game-message').html('Victory row 3')
    console.log('Row 3 victory')
  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] && store.game.cells[3] !== '') {
    console.log('Column 1 victory')
    $('#display-game-message').html('Victory column 1')
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] && store.game.cells[7] !== '') {
    console.log('Column 2 victory')
    $('#display-game-message').html('Column 2 victory')
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] && store.game.cells[5] !== '') {
    console.log('Column 3 victory')
    $('#display-game-message').html('Column 3 victory')
  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] && store.game.cells[4] !== '') {
    console.log('Diagonal 1 victory row')
    $('#display-game-message').html('Diagonal 1 victory row')
  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] && store.game.cells[4] !== '') {
    console.log('Diagonal 2 victory')
    $('#display-game-message').html('Diagonal 2 victory')
  } else if (store.toggleTurn >= 8) {
    $('#display-game-message').html('Its a Tie')
  } else {
    $('#display-game-message').html('')
    console.log('None of the conditions for winning were found')
  }
}

// If there are 9 moves 'store.toggle >= 9'... 'its a tie... '
// then...make the checkForResult() connect to the UI

module.exports = {
  clickedBox,
  updateGame,
  checkForResult,
  createNewGame,
  clearBoard
}
