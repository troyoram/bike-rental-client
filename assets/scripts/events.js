'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')
const gameLogic = require('./game-logic.js')

// initialize grid and players
let grid = ['', '', '', '', '', '', '', '', '']
const playerX = 'X'
const playerO = 'O'
let currentPlayer = playerX

const onIndexBikes = function (event) {
  // prevent auto-page refresh
  event.preventDefault()
  // reset js board
  grid = ['', '', '', '', '', '', '', '', '']
  // reset starting player to X
  currentPlayer = playerX

  const data = getFormFields(event.target)

  api.indexBikes(data)
    .then(ui.indexBikesSuccess)
    .catch(ui.indexBikesFailure)
}

const onShowBike = function (event) {
  // prevent auto-page refresh
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log(`events onShowBike data is = ${data}`)

  // const bikeId = $(event.target).closest('section').data('id')

  api.showBike(data)
    .then(ui.showBikeSuccess)
    .catch(ui.showBikeFailure)
}

const onCreateBike = function (event) {
  // prevent auto-page refresh
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log(`events onCreateBike data is = ${data}`)
  console.log(`events onCreateBike data.bike.style is = ${data.bike.style}`)
  console.log(`events onCreateBike data.bike.size is = ${data.bike.size}`)
  // console.log(`events onCreateBike store.bikes.style is = ${store.bikes.style}`)
  // console.log(`events onCreateBike store.bikes.size is = ${store.bikes.size}`)
  //
  // store.bike.style = data.bike.style
  // store.bike.size = data.bike.size

  // const bikeId = $(event.target).closest('section').data('id')

  api.createBike(data)
    .then(ui.createBikeSuccess)
    .catch(ui.createBikeFailure)
}

const onUpdateBike = function (event) {
  // prevent auto-page refresh
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log(`events onUpdateBike data is = ${data}`)
  console.log(`events onUpdateBike data.bike.id is = ${data.bike.id}`)
  console.log(`events onUpdateBike data.bike.style is = ${data.bike.style}`)
  console.log(`events onUpdateBike data.bike.size is = ${data.bike.size}`)
  // console.log(`events onCreateBike store.bikes.style is = ${store.bikes.style}`)
  // console.log(`events onCreateBike store.bikes.size is = ${store.bikes.size}`)
  //
  // store.bike.style = data.bike.style
  // store.bike.size = data.bike.size

  // const bikeId = $(event.target).closest('section').data('id')

  api.updateBike(data)
    .then(ui.updateBikeSuccess)
    .catch(ui.updateBikeFailure)
}

const onDeleteBike = function (event) {
  // prevent auto-page refresh
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log(`events onDeleteBike data is = ${data}`)
  console.log(`events onDeleteBike data.bike.id is = ${data.bike.id}`)
  // console.log(`events onDeleteBike data.bike.style is = ${data.bike.style}`)
  // console.log(`events onDeleteBike data.bike.size is = ${data.bike.size}`)
  // console.log(`events onCreateBike store.bikes.style is = ${store.bikes.style}`)
  // console.log(`events onCreateBike store.bikes.size is = ${store.bikes.size}`)
  //
  // store.bike.style = data.bike.style
  // store.bike.size = data.bike.size

  // const bikeId = $(event.target).closest('section').data('id')

  if (confirm('Are you sure you want to delete this bike?')) {
    api.deleteBike(data)
      .then(ui.deleteBikeSuccess)
      .catch(ui.deleteBikeFailure)
  }
}

const onSelectCell = function (event) {
  // prevent auto-page refresh
  event.preventDefault()
  // clear any previous game message
  $('#game-message').html('')
  // prevent selection if game is over
  if (store.game.over) {
    $('#game-message').html('Game Over! Select New Game to continue.')
    return
  }
  // prevent selection of previously selected cell
  if (grid[$(event.target).data('id')] !== '') {
    $('#game-message').html('Invalid Move! Try again')
    return
  }

  // set html box to currentPlayer 'X' or 'O'
  $(event.target).html(currentPlayer)
  // set js grid to currentPlayer
  grid[$(event.target).data('id')] = currentPlayer

  store.game.cells = grid

  store.game.index = $(event.target).data('id')
  store.game.value = currentPlayer

  // test for winner after each move
  const winStatus = gameLogic.isWinningMove(grid, $(event.target).data('id'))
  if (winStatus) {
    $('#game-message').html(currentPlayer + ' Wins! Game Over')
    store.game.over = true
    // change cell background color of winLine
    $('#' + store.winLine[0]).css('background-color', 'red')
    $('#' + store.winLine[1]).css('background-color', 'red')
    $('#' + store.winLine[2]).css('background-color', 'red')
  }
  // test for tie
  const cellsLeft = gameLogic.emptyCellTest(grid)
  if (!winStatus && !cellsLeft) {
    $('#game-message').html('Tie! Game Over')
    store.game.over = true
  }
  // alternate moves between playerX and playerO
  if (currentPlayer === playerX) {
    currentPlayer = playerO
  } else {
    currentPlayer = playerX
  }

  const data = getFormFields(event.target)

  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const onGameStats = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.indexGame(data)
    .then(ui.gameStatsSuccess)
    .catch(ui.gameStatsFailure)
}

module.exports = {
  onIndexBikes,
  onShowBike,
  onCreateBike,
  onUpdateBike,
  onDeleteBike,
  onSelectCell,
  onGameStats
}
