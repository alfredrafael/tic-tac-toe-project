'use strict'
const events = require('./events.js')
const gameEvents = require('./game/gameEvents.js') // lo pido

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

  $('#top-left-row-0').on('click', gameEvents.clickedBox)
  $('#top-center-row-1').on('click', gameEvents.clickedBox)
  $('#top-rigth-row-2').on('click', gameEvents.clickedBox)
  $('#middle-left-row-3').on('click', gameEvents.clickedBox)
  $('#middle-center-row-4').on('click', gameEvents.clickedBox)
  $('#middle-rigth-row-5').on('click', gameEvents.clickedBox)
  $('#bottom-left-row-6').on('click', gameEvents.clickedBox)
  $('#bottom-center-row-7').on('click', gameEvents.clickedBox)
  $('#bottom-rigth-row-8').on('click', gameEvents.clickedBox)
})
