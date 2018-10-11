'use strict'
const events = require('./events.js')
const gameEvents = require('./game/gameEvents.js') // lo pido para este documento
const store = require('./store.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  console.log('You are in the right console window')
  $('#sign-up-form').on('submit', events.signUpEvent)
  $('#sign-in-form').on('submit', events.signInEvent)
  $('#change-password-form').on('submit', events.changePasswordEvent)

  for (let i = 0; i < 9; i++) {
    $(`#game-box-${i}`).on('click', function () {
      gameEvents.clickedBox(i)
    })
  }

  $('#sign-out-button').on('click', events.signOutEvent)
  $('#new-game-button').on('click', gameEvents.createNewGame, gameEvents.clearBoard)
  $('#reset-button').on('click', gameEvents.clearBoard)
})