'use strict'

const store = require('./store.js')

const indexBikesSuccess = function (data) {
  store.bikes = data.bikes

  let newHTML = ''
  newHTML += '<div class="row">'
  newHTML += '<div class="col box grey">Bike ID</div>'
  newHTML += '<div class="col box grey">Style</div>'
  newHTML += '<div class="col box grey">Size</div>'
  newHTML += '<div class="col box grey">User ID</div>'
  newHTML += '</div>'

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
  store.bikes = data.bikes
  // console.log(`showBikeSuccess data.bike.id is = ${data.bike.id}`)
  // console.log(`showBikeSuccess data.bike.style is = ${data.bike.style}`)
  // console.log(`showBikeSuccess data.bike.size is = ${data.bike.size}`)
  // console.log(`showBikeSuccess data.bike.user_id is = ${data.bike.user_id}`)

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
  $('#display-all-bikes-message').html('Bike ID not found')
  $('#display-all-bikes-message').css('color', 'red')
}

const createBikeSuccess = function (data) {
  store.bike = data.bike
  // console.log('createBikeSuccess called')
  // console.log(data)
  // console.log(store)
  // console.log(store.bike)

  // // TODO: Add code to call showBikeSuccess with new bike id

  // indexBikesSuccess(data)
}

const createBikeFailure = function (data) {
  store.bikes = data.bikes
  $('#display-all-bikes-message').html('Unable to create new bike')
  $('#display-all-bikes-message').css('color', 'red')
}

const updateBikeSuccess = function (data) {
  store.bike = data.bike
  // console.log('updateBikeSuccess called')
  // console.log(data)
  // console.log(store)
  // console.log(store.bike)

  // // TODO: Add code to call showBikeSuccess with updated bike id

  // indexBikesSuccess(data)
}

const updateBikeFailure = function (data) {
  store.bikes = data.bikes
  $('#display-all-bikes-message').html('Unable to update bike')
  $('#display-all-bikes-message').css('color', 'red')
}

const deleteBikeSuccess = function (data) {
  // console.log('deleteBikeSuccess called')
  // console.log(data)
  // console.log(store)
  // console.log(store.bike)

  // // TODO: Add code to call showBikeSuccess with deleted bike id
  $('#display-all-bikes-message').html('Bike has been deleted')
  $('#display-all-bikes-message').css('color', 'green')

  // indexBikesSuccess(data)
}

const deleteBikeFailure = function (data) {
  store.bikes = data.bikes
  $('#display-all-bikes-message').html('Unable to delete bike')
  $('#display-all-bikes-message').css('color', 'red')
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
