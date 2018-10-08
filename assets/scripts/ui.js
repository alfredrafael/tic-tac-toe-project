'use strict'

const store = require('./store')

$(() => {
  $('#user-options-after-sign-in').hide()
  $('#divWithBoard').hide()
})

const signUpSuccessAtUserInterface = () => {
  $('#display-sign-up-message').html('Sign up was successful')
  $('#display-sign-up-message').css('color', 'green')
  $("#display-sign-up-message").fadeOut(2000)
  $('#sign-up-form').trigger('reset')
}

const signUpFailureAtUserInterface = () => {
  $('#display-sign-up-message').html('Sign up was NOT successful')
  $('#display-sign-up-message').css('color', 'red')
  $("#display-sign-up-message").fadeOut(2000)
  $('#sign-in-form').trigger('reset')
}

const signInSuccessAtUserInterface = (response) => {
  $('#display-log-in-message').html('Sign in was successful')
  console.log(store.user = response.user) // take the 'user' value from the response (reading from left ot right)and store it in "store", under the name of "user"
  $('#display-log-in-message').css('color', 'green')
  $('#user-options-after-sign-in').show()
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()

}

const signInFailureAtUserInterface = () => {
  $('#display-log-in-message').html('Sign in was NOT successful')
  $('#display-log-in-message').css('color', 'red')
  $("#display-log-in-message").fadeOut(2000)
  $('#sign-in-button').trigger('reset')
}

const signOutSuccessAtUserInterface = () => {
  $('#display-log-in-message').html('You are successfully logged out')
  $('#display-log-in-message').css('color', 'green')
  $('#section-gameBoard').hide()
  $('#sign-out-button').trigger('reset')
  $("#display-log-in-message").fadeOut(5000)
  $('#divWithBoard').hide()
  $('#change-password-form').hide()
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#user-options-after-sign-in').hide()
}

const signOutFailureAtUserInterface = () => {
  $('#display-log-in-message').html('You are NOT logged out')
  $('#display-log-in-message').css('color', 'red')
  $('#sign-out-button').trigger('reset')
}

const changePasswordSuccessAtUserInterface = () => {
  $('#display-change-password-message').html('You have successfully change your password')
  $('#display-change-password-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailureAtUserInterface = () => {
  $('#display-change-password-message').html('Sorry, we were not able to change your password')
  $('#display-change-password-message').css('color', 'red')
  $("#display-change-password-message").fadeOut(5000)
  $('#change-password-button').trigger('reset')
}

const createNewGameSuccess = (responseFromServer) => {
  console.log(responseFromServer)
  $('#display-game-message').html('Game in progress')
  $('#display-game-message').css('color', 'green')
  store.game = responseFromServer.game
  console.log(store.game)
  $('#divWithBoard').show()
}

const createNewGameFailure = function () {
  $('#display-game-message').text('CANT CREATE THE GAME!')
}

const updateGameSuccess = function () {
  $('#display-game-message').text('Game updated!')
}

const updateGameFailure = function () {
  $('#display-update-message').text('Game NOT updated!')
}

const showStatsAtUserInterface = function () {
  $('#display-game-stats').html(`The total amount of games played is ${store.game.id}`)
  $('#display-game-stats').css("color", "green");

}

const showStatsErrorMessage = function () {
  $('#display-game-stats').html(`At the moment, I am unable to retrieve the total number of games`)
  $('#display-game-stats').css("color", "red");
}

module.exports = {
  signUpSuccessAtUserInterface,
  signUpFailureAtUserInterface,
  signInSuccessAtUserInterface,
  signInFailureAtUserInterface,
  signOutSuccessAtUserInterface,
  signOutFailureAtUserInterface,
  changePasswordSuccessAtUserInterface,
  changePasswordFailureAtUserInterface,
  createNewGameSuccess,
  createNewGameFailure,
  updateGameSuccess,
  updateGameFailure,
  showStatsAtUserInterface ///////////////////////////////////////////////////////////////
}

/*

*/
