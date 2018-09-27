'use strict'

const store = require('./store')

const signUpSuccessAtUserInterface = () => {
  $('#display-sign-up-message').html('Sign up was successful')
  $('#display-sign-up-message').css('color', 'green')
  $('#sign-up-button').trigger('reset')
  console.log('you pressed a button')
}

const signUpFailureAtUserInterface = () => {
  $('#display-sign-up-message').html('Sign up was NOT successful')
  $('#display-sign-up-message').css('color', 'red')
  $('#sign-up-button').trigger('reset')
  console.log('you pressed a button')
}

const signInSuccessAtUserInterface = (response) => {
  $('#display-log-in-message').html('Sign up was successful')
  console.log(store.user = response.user)
  $('#display-log-in-message').css('color', 'green')
  $('#sign-in-button').trigger('reset')
}

const signInFailureAtUserInterface = () => {
  $('#display-log-in-message').html('Sign in was NOT successful')
  $('#display-log-in-message').css('color', 'red')
  $('#sign-in-button').trigger('reset')
}

const signOutSuccessAtUserInterface = () => {
  $('#display-log-in-message').html('You are successfully logged out')
  $('#display-log-in-message').css('color', 'green')
  $('#sign-out-button').trigger('reset')
}

const signOutFailureAtUserInterface = () => {
  $('#display-log-in-message').html('You are NOT logged out')
  $('#display-log-in-message').css('color', 'red')
  $('#sign-out-button').trigger('reset')
}

module.exports = {
  signUpSuccessAtUserInterface,
  signUpFailureAtUserInterface,
  signInSuccessAtUserInterface,
  signInFailureAtUserInterface,
  signOutSuccessAtUserInterface,
  signOutFailureAtUserInterface
}
