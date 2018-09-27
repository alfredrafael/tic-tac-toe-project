'use strict'

const getFormFields = require(`../../lib/get-form-fields.js`)
const ajaxCalls = require(`./api.js`)
const userInterface = require(`./ui.js`)

const signUpEvent = (e) => {
  e.preventDefault()
  console.log('The button was pressed')

  const data = getFormFields(event.target) // The target property returns the element that triggered the event, and not necessarily the event-listener's element
  ajaxCalls.signUpAjaxCall(data) // file and function to be created
    .then(userInterface.signUpSuccessAtUserInterface)
    .catch(userInterface.signUpFailureAtUserInterface)
}

const signInEvent = (e) => {
  e.preventDefault(e)
  console.log(e)
  const dataComingFromDataBase = getFormFields(event.target)
  ajaxCalls.signInAjaxCall(dataComingFromDataBase)
    .then(userInterface.signInSuccessAtUserInterface)
    .catch(userInterface.signInFailureAtUserInterface)
}

const changePasswordEvent = (e) => {
  e.preventDefault()
  const theFormInputsAreStoredHere = getFormFields(event.target)

  ajaxCalls.onChangePasswordAjaxCall(theFormInputsAreStoredHere)
    .then(userInterface.changePasswordSuccessAtUserInterface)
    .catch(userInterface.changePasswordFailureAtUserInterface)
}

const signOutEvent = (e) => {
  const data = getFormFields(e.target)
  console.log('Sign out is running')
  e.preventDefault()
  ajaxCalls.signOutAtAjaxCall(data)
    .then(userInterface.signOutSuccessAtUserInterface)
    .catch(userInterface.signOutFailureAtUserInterface)
}

module.exports = {
  signUpEvent,
  signInEvent,
  signOutEvent,
  changePasswordEvent
}
