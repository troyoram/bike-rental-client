'use strict'

const store = require('./store.js')
const gameLogic = require('./game-logic.js')
// const events = require('./events.js')

const indexBikesSuccess = function (data) {
  store.game = data.game
  // reset html board
  $('.box').html('')
  // reset game message
  $('#game-message').html('')
  // reset game stats messages
  $('.game-stat-msg').html('')
  // reset cell background color
  $('.box').css('background-color', 'grey')
  // unhide tic-tac-toe board
  $('#game-board').removeClass('hidden')
}

const updateGameSuccess = function (data) {
  store.game = data.game
}

const gameStatsSuccess = function (data) {
  store.games = data.games
  $('#game-stats-message1').html('Number of games played = ' + store.games.length)

  // calculate number of games completed
  let count = 0
  for (let i = 0; i < store.games.length; i++) {
    if (store.games[i].over === true) {
      count += 1
    }
  }
  $('#game-stats-message2').html('Number of games finished = ' + count)

  // calulate number of X wins, O wins, and Ties for all user games
  let numXWins = 0
  let numOWins = 0
  let numOfTies = 0
  let nowPlaying = ''
  for (let i = 0; i < store.games.length; i++) {
    if (store.games[i].over === true) {
      for (let j = 0; j < store.games[i].cells.length; j++) {
        if (store.games[i].cells[j] !== '') {
          nowPlaying = store.games[i].cells[j]
          if (gameLogic.isWinningMove(store.games[i].cells, j)) {
            if (nowPlaying === 'X') {
              numXWins += 1
              break
            } else if (nowPlaying === 'O') {
              numOWins += 1
              break
            }
          } else if (j === store.games[i].cells.length - 1) {
            numOfTies += 1
            break
          }
        }
      }
    }
  }
  $('#game-stats-message3').html('Number of X wins = ' + numXWins)
  $('#game-stats-message4').html('Number of O wins = ' + numOWins)
  $('#game-stats-message5').html('Number of Ties = ' + numOfTies)
}

// // TODO: complete updateGameFailure
const updateGameFailure = function (data) {}

// // TODO: complete indexBikesFailure
const indexBikesFailure = function (data) {}

// // TODO: complete gameStatsFailure
const gameStatsFailure = function (data) {}

module.exports = {
  indexBikesSuccess,
  indexBikesFailure,
  updateGameSuccess,
  updateGameFailure,
  gameStatsSuccess,
  gameStatsFailure
}
