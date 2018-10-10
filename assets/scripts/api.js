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

// CREATE THE  GAME AI (CONSLE.LOG(RESPONSE.GAME)) STORE THAT GAME...

const createNewGameAjaxCall = function (responseFromServer) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateGameAjaxCall = (dataPassedToTheDataBase) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: dataPassedToTheDataBase
  })
}

const showStatsAjaxCall = function () { //////////////////////////////////////////////////////////
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}


module.exports = {
  signUpAjaxCall,
  signInAjaxCall,
  signOutAtAjaxCall,
  changePasswordAjaxCall,
  createNewGameAjaxCall,
  updateGameAjaxCall,
  showStatsAjaxCall ////////////////////////////////////////////////////////////
}
