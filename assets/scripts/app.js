'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const appEvents = require('./events.js')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('click', authEvents.onSignOut)

  // $('.col').on('click', appEvents.onSelectCell)
  $('#indexBikes').on('click', appEvents.onIndexBikes)
  $('#show-bike-form').on('submit', appEvents.onShowBike)
  $('#create-bike-form').on('submit', appEvents.onCreateBike)
  $('#update-bike-form').on('submit', appEvents.onUpdateBike)
  $('#delete-bike-form').on('submit', appEvents.onDeleteBike)
  $('#gameStats').on('click', appEvents.onGameStats)
})
