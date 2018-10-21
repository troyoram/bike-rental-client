'use strict'

const store = require('./store.js')
const gameLogic = require('./game-logic.js')
// const events = require('./events.js')

const indexBikesSuccess = function (data) {
  store.bikes = data.bikes
  console.log(data)
  console.log(store)
  console.log(store.bikes)

  // $('#display-all-bikes-message').html('List of bikes = ' + store.bikes[1].style)
  let newHTML = ''
  newHTML += '<div class="row">'
  newHTML += '<div class="col box grey">Style</div>'
  newHTML += '<div class="col box grey">Size</div>'
  newHTML += '<div class="col box grey">User</div>'
  newHTML += '</div>'
  // store.forEach(function (bike) {
  for (let i = 0; i < store.bikes.length; i++) {
    console.log(store.bikes[i].id)
    console.log(store.bikes[i].style)
    console.log(store.bikes[i].size)
    console.log(store.bikes[i].user_id)
    // $('#display-all-bikes-message').append('<div class="col box grey"><ul><h4> Style: ' + store.bikes[i].style + ', Size ' + store.bikes[i].size + ', from user ' + store.bikes[i].user_id + '</h4></ul></div>')
    newHTML += '<div class="row">'
    newHTML += '<div class="col box grey"><ul><h4>' + store.bikes[i].style + '</h4></ul></div>'
    newHTML += '<div class="col box grey"><ul><h4>' + store.bikes[i].size + '</h4></ul></div>'
    newHTML += '<div class="col box grey"><ul><h4>' + store.bikes[i].user_id + '</h4></ul></div>'
    newHTML += '</div>'
  }
  $('#display-all-bikes-message').html(newHTML)
  // $('#display-all-bikes-message').css('color', 'red')

  // // reset html board
  // $('.box').html('')
  // // reset game message
  // $('#game-message').html('')
  // // reset game stats messages
  // $('.game-stat-msg').html('')
  // // reset cell background color
  // $('.box').css('background-color', 'grey')
  // // unhide tic-tac-toe board
  // $('#game-board').removeClass('hidden')
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
