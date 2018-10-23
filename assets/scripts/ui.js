'use strict'

const store = require('./store.js')

const indexBikesSuccess = function (data) {
  store.bikes = data.bikes
  // create bike table header row display
  let newHTML = ''
  newHTML += '<div class="row">'
  newHTML += '<div class="col box grey">Bike ID</div>'
  newHTML += '<div class="col box grey">Style</div>'
  newHTML += '<div class="col box grey">Size</div>'
  newHTML += '<div class="col box grey">User ID</div>'
  newHTML += '</div>'
  // populate each row of bike table display
  for (let i = 0; i < store.bikes.length; i++) {
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
  $('#display-all-bikes-message').html('Unable to list all bikes')
  $('#display-all-bikes-message').css('color', 'red')
}

const showBikeSuccess = function (data) {
  store.bike = data.bike
  // display bike table header row and one populated bike row
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
  $('#show-bike-form').trigger('reset')
}

const showBikeFailure = function (data) {
  store.bike = data.bike
  $('#display-all-bikes-message').html('Bike ID not found')
  $('#display-all-bikes-message').css('color', 'red')
  $('#show-bike-form').trigger('reset')
}

const createBikeSuccess = function (data) {
  store.bike = data.bike
  $('#create-bike-form').trigger('reset')
  showBikeSuccess(data)
}

const createBikeFailure = function (data) {
  store.bike = data.bike
  $('#display-all-bikes-message').html('Unable to create new bike')
  $('#display-all-bikes-message').css('color', 'red')
  $('#create-bike-form').trigger('reset')
}

const updateBikeSuccess = function (data) {
  store.bike = data.bike
  $('#update-bike-form').trigger('reset')
  showBikeSuccess(data)
}

const updateBikeFailure = function (data) {
  store.bike = data.bike
  $('#display-all-bikes-message').html('Unable to update bike')
  $('#display-all-bikes-message').css('color', 'red')
  $('#update-bike-form').trigger('reset')
}

const deleteBikeSuccess = function (data) {
  $('#display-all-bikes-message').html('Bike deleted')
  $('#display-all-bikes-message').css('color', 'green')
  $('#delete-bike-form').trigger('reset')
}

const deleteBikeFailure = function (data) {
  store.bike = data.bike
  $('#display-all-bikes-message').html('Unable to delete bike')
  $('#display-all-bikes-message').css('color', 'red')
  $('#delete-bike-form').trigger('reset')
}

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
  deleteBikeFailure
}
