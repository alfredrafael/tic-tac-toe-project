'use strict'

const store = require('./store')

$(() => {
  $('#user-options-after-sign-in').hide()
  $('#divWithBoard').hide()
})

const signUpSuccessAtUserInterface = () => {
  $('#display-sign-up-message').html('Sign up was successful')
  $('#display-sign-up-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signUpFailureAtUserInterface = () => {
  $('#display-sign-up-message').html('Sign up was NOT successful')
  $('#display-sign-up-message').css('color', 'red')
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
  $('#sign-in-button').trigger('reset')
}

const signOutSuccessAtUserInterface = () => {
  $('#display-log-in-message').html('You are successfully logged out')
  $('#display-log-in-message').css('color', 'green')
  $('#section-gameBoard').hide()
  $('#sign-out-button').trigger('reset')
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
  $('#change-password-button').trigger('reset')
}

const createNewGameSuccess = (responseFromServer) => {
  console.log(responseFromServer)
  $('#display-game-message').html('YOU HAVE STARTED A NEW GAME!')
  $('#display-game-message').css('color', 'green')
  store.game = responseFromServer.game
  console.log(store.game)
  $('').html('A GAME IS IN PROGRESS!')
  $('#divWithBoard').show()

}

const createNewGameFailure = function () {
  $('#display-game-message').text('CANT CREATE THE GAME!')
}

const updateGameSuccess = function () {
  $('#display-game-message').text('Game updated!')
  console.log('It does something')
}

const updateGameFailure = function () {
  $('#display-update-message').text('Game NOT updated!')
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
  updateGameFailure
}

/*

*/
