'use strict'

const ajaxCalls = require(`../api.js`)
const userInterface = require(`../ui.js`)
const store = require('../store')

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

const createNewGame = () => {
  console.log('create new game function is firinG')
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
  if (store.toggleTurn % 2 === 0) {
    $(`#game-box-${i}`).text('X')
    store.game.cells[i] = 'X'
  //  gameBoard[i] = 'X'
  } else {
    $(`#game-box-${i}`).text('O')
    store.game.cells[i] = 'O'
  //  gameBoard[i] = 'O'
  }
  $(`#game-box-${i}`).attr('disabled', true)
  console.log(store.game)
  dataToUpdateGameApi.game.cell.index = i // lets store the value of game.cell.index into 'i'
  dataToUpdateGameApi.game.cell.value = gameBoard[i]
  // checkForResult()
  ajaxCalls.updateGameAjaxCall(dataToUpdateGameApi)
  store.toggleTurn++
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

// If there are 9 moves 'store.toggle >= 9'... 'its a tie... '
// then...make the checkForResult() connect to the UI

module.exports = {
  clickedBox,
  updateGame,
  checkForResult,
  gameBoard,
  createNewGame
}

/*
,__                   __
    '~~****Nm_    _mZ*****~~
            _8@mm@K_
           W~@`  '@~W
          ][][    ][][
    gz    'W'W.  ,W`W`    es
  ,Wf    gZ****MA****Ns    VW.
 gA`   ,Wf     ][     VW.   'Ms
Wf    ,@`      ][      '@.    VW
M.    W`  _mm_ ][ _mm_  'W    ,A
'W   ][  i@@@@i][i@@@@i  ][   W`
 !b  @   !@@@@!][!@@@@!   @  d!
  VWmP    ~**~ ][ ~**~    YmWf
    ][         ][         ][
  ,mW[         ][         ]Wm.
 ,A` @  ,gms.  ][  ,gms.  @ 'M.
 W`  Yi W@@@W  ][  W@@@W iP  'W
d!   'W M@@@A  ][  M@@@A W`   !b
@.    !b'V*f`  ][  'V*f`d!    ,@
'Ms    VW.     ][     ,Wf    gA`
  VW.   'Ms.   ][   ,gA`   ,Wf
   'Ms    'V*mmWWmm*f`    gA`

*/
