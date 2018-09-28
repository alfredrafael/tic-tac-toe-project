'use strict'

const store = require('./store.js')
const config = require('./config.js')

const signUpAjaxCall = (dataFromDatabase) => {
  console.log(dataFromDatabase)

  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: dataFromDatabase
  })
}

const signInAjaxCall = (dataFromDatabase) => {
  console.log(dataFromDatabase)

  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: dataFromDatabase
  })
}

const changePasswordAjaxCall = (passwordDataFromDatabase) => {
  console.log(passwordDataFromDatabase)

  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: passwordDataFromDatabase
  })
}

const signOutAtAjaxCall = () => {
  console.log()

  return $.ajax({
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

module.exports = {
  signUpAjaxCall,
  signInAjaxCall,
  signOutAtAjaxCall,
  changePasswordAjaxCall
}
