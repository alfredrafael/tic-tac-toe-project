'use strict'
const events = require('./events.js')
const gameEvents = require('./game/gameEvents.js') // lo pido para este documento

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  console.log('You are in the right console window')
  $('#sign-up-form').on('submit', events.signUpEvent)
  $('#sign-in-form').on('submit', events.signInEvent)
  $('#change-password-form').on('submit', events.changePasswordEvent)
  $('#sign-out-button').on('click', events.signOutEvent)

  for (let i = 0; i < gameEvents.gameBoard.length; i++) {
    $(`#game-box-${i}`).on('click', function () {
      gameEvents.clickedBox(i)
    })
  }

  $('#new-game-button').on('click', gameEvents.createNewGame)
  $('#reset-button').on('click', gameEvents.clearBoard)
})