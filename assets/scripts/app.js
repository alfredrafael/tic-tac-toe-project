'use strict'
const events = require('./events.js')
const gameEvents = require('./game/gameEvents.js') // lo pido para este documento
const store = require('./store.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  console.log('You are in the tic-tac-toe project console :) ')
  $('#sign-up-form').on('submit', events.signUpEvent)
  $('#sign-in-form').on('submit', events.signInEvent)
  $('#change-password-form').on('submit', events.changePasswordEvent)
  $('#sign-out-button').on('click', events.signOutEvent)
  $('#new-game-button').on('click', gameEvents.createNewGame, gameEvents.clearBoard)
  $('#reset-button').on('click', gameEvents.clearBoard)
  //$('.tic-box').on('click', gameEvents.clickedBox)

  /*
  for (let i = 0; i < 9; i++) {
    $(`#game-box-${i}`).on('click', function () {
      gameEvents.clickedBox(i)
    })
  }
*/

  /*
    $('#game-box-0').on('click', gameEvents.clickedBox)
    $('#game-box-1').on('click', gameEvents.clickedBox)
    $('#game-box-2').on('click', gameEvents.clickedBox)
    $('#game-box-3').on('click', gameEvents.clickedBox)
    $('#game-box-4').on('click', gameEvents.clickedBox)
    $('#game-box-5').on('click', gameEvents.clickedBox)
    $('#game-box-6').on('click', gameEvents.clickedBox)
  */

  /*
    $('.tic-box').on('click', () => alert('Hello tic-box'))
    $('.top-left-row-0').on('click', () => alert('Hello long-class'))
    $('.top-center-row-1').on('click', () => alert('Hello-long-class'))
    $('.top-rigth-row-2').on('click', () => alert('Hello long-class'))
    $('.middle-left-row-3').on('click', () => alert('Hello long-class'))
    $('.middle-center-row-4').on('click', () => alert('Hello long-class'))
    $('.middle-rigth-row-5').on('click', () => alert('Hello long-class'))
    $('.bottom-left-row-6').on('click', () => alert('Hello long-class'))
    $('.bottom-center-row-7').on('click', () => alert('Hello long-class'))
    $('.bottom-rigth-row-8').on('click', () => alert('Hello long-class'))
  */

})
