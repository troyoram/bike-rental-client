'use strict'

const store = require('./store.js')
const gameLogic = require('./game-logic.js')
// const events = require('./events.js')

const indexBikesSuccess = function (data) {
  store.bikes = data.bikes
  // console.log(data)
  // console.log(store)
  // console.log(store.bikes)

  let newHTML = ''
  newHTML += '<div class="row">'
  newHTML += '<div class="col box grey">Bike ID</div>'
  newHTML += '<div class="col box grey">Style</div>'
  newHTML += '<div class="col box grey">Size</div>'
  newHTML += '<div class="col box grey">User ID</div>'
  newHTML += '</div>'
  // store.forEach(function (bike) {
  for (let i = 0; i < store.bikes.length; i++) {
    // console.log(store.bikes[i].id)
    // console.log(store.bikes[i].id)
    // console.log(store.bikes[i].style)
    // console.log(store.bikes[i].size)
    // console.log(store.bikes[i].user_id)
    // $('#display-all-bikes-message').append('<div class="col box grey"><ul><h4> Style: ' + store.bikes[i].style + ', Size ' + store.bikes[i].size + ', from user ' + store.bikes[i].user_id + '</h4></ul></div>')
    newHTML += '<div class="row">'
    newHTML += '<div class="col box grey"><ul><h4>' + store.bikes[i].id + '</h4></ul></div>'
    newHTML += '<div class="col box grey"><ul><h4>' + store.bikes[i].style + '</h4></ul></div>'
    newHTML += '<div class="col box grey"><ul><h4>' + store.bikes[i].size + '</h4></ul></div>'
    newHTML += '<div class="col box grey"><ul><h4>' + store.bikes[i].user_id + '</h4></ul></div>'
    newHTML += '</div>'
  }
  $('#display-all-bikes-message').html(newHTML)
}

const indexBikesFailure = function (data) {
  store.bikes = data.bikes
  // console.log(`api showBikeFailure data.bike.id is = ${data.bike.id}`)
  // $('#display-all-bikes-message').html(newHTML)
  $('#display-all-bikes-message').html('Unable to list all bikes')
  $('#display-all-bikes-message').css('color', 'red')
}

const showBikeSuccess = function (data) {
  store.bikes = data.bikes
  // console.log(data)
  // console.log(store)
  // console.log(store.bikes)

  console.log(`showBikeSuccess data.bike.id is = ${data.bike.id}`)
  console.log(`showBikeSuccess data.bike.style is = ${data.bike.style}`)
  console.log(`showBikeSuccess data.bike.size is = ${data.bike.size}`)
  console.log(`showBikeSuccess data.bike.user_id is = ${data.bike.user_id}`)

  let newHTML = ''
  newHTML += '<div class="row">'
  newHTML += '<div class="col box grey">Bike ID</div>'
  newHTML += '<div class="col box grey">Style</div>'
  newHTML += '<div class="col box grey">Size</div>'
  newHTML += '<div class="col box grey">User ID</div>'
  newHTML += '</div>'
  newHTML += '<div class="row">'
  newHTML += '<div class="col box grey"><ul><h4>' + data.bike.id + '</h4></ul></div>'
  newHTML += '<div class="col box grey"><ul><h4>' + data.bike.style + '</h4></ul></div>'
  newHTML += '<div class="col box grey"><ul><h4>' + data.bike.size + '</h4></ul></div>'
  newHTML += '<div class="col box grey"><ul><h4>' + data.bike.user_id + '</h4></ul></div>'
  newHTML += '</div>'

  $('#display-all-bikes-message').html(newHTML)
}

const showBikeFailure = function (data) {
  store.bikes = data.bikes
  // console.log(`api showBikeFailure data.bike.id is = ${data.bike.id}`)
  // $('#display-all-bikes-message').html(newHTML)
  $('#display-all-bikes-message').html('Bike ID not found')
  $('#display-all-bikes-message').css('color', 'red')
}

const createBikeSuccess = function (data) {
  store.bike = data.bike
  console.log('createBikeSuccess called')
  console.log(data)
  console.log(store)
  console.log(store.bike)

  // // TODO: Add code to call showBikeSuccess with new bike id

  // indexBikesSuccess(data)
}

const createBikeFailure = function (data) {
  store.bikes = data.bikes
  // console.log(`api showBikeFailure data.bike.id is = ${data.bike.id}`)
  // $('#display-all-bikes-message').html(newHTML)
  $('#display-all-bikes-message').html('Unable to create new bike')
  $('#display-all-bikes-message').css('color', 'red')
}

const updateBikeSuccess = function (data) {
  store.bike = data.bike
  console.log('updateBikeSuccess called')
  console.log(data)
  console.log(store)
  console.log(store.bike)

  // // TODO: Add code to call showBikeSuccess with updated bike id

  // indexBikesSuccess(data)
}

const updateBikeFailure = function (data) {
  store.bikes = data.bikes
  // console.log(`api showBikeFailure data.bike.id is = ${data.bike.id}`)
  // $('#display-all-bikes-message').html(newHTML)
  $('#display-all-bikes-message').html('Unable to update bike')
  $('#display-all-bikes-message').css('color', 'red')
}

const deleteBikeSuccess = function (data) {
  // store.bike = data.bike
  console.log('deleteBikeSuccess called')
  console.log(data)
  console.log(store)
  console.log(store.bike)

  // // TODO: Add code to call showBikeSuccess with deleted bike id
  $('#display-all-bikes-message').html('Bike has been deleted')
  $('#display-all-bikes-message').css('color', 'green')

  // indexBikesSuccess(data)
}

const deleteBikeFailure = function (data) {
  store.bikes = data.bikes
  // console.log(`api showBikeFailure data.bike.id is = ${data.bike.id}`)
  // $('#display-all-bikes-message').html(newHTML)
  $('#display-all-bikes-message').html('Unable to delete bike')
  $('#display-all-bikes-message').css('color', 'red')
}

const failure = (error) => {
  console.log('ui failure() called')
  console.error(error)
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

// // TODO: complete gameStatsFailure
const gameStatsFailure = function (data) {}

module.exports = {
  indexBikesSuccess,
  indexBikesFailure,
  showBikeSuccess,
  showBikeFailure,
  createBikeSuccess,
  createBikeFailure,
  updateBikeSuccess,
  updateBikeFailure,
  deleteBikeSuccess,
  deleteBikeFailure,
  failure,
  updateGameSuccess,
  updateGameFailure,
  gameStatsSuccess,
  gameStatsFailure
}
