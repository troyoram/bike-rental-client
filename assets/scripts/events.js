'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onIndexBikes = function (event) {
  // prevent auto-page refresh
  event.preventDefault()

  const data = getFormFields(event.target)

  api.indexBikes(data)
    .then(ui.indexBikesSuccess)
    .catch(ui.indexBikesFailure)
}

const onShowBike = function (event) {
  // prevent auto-page refresh
  event.preventDefault()

  const data = getFormFields(event.target)
  // console.log(`events onShowBike data is = ${data}`)

  api.showBike(data)
    .then(ui.showBikeSuccess)
    .catch(ui.showBikeFailure)
}

const onCreateBike = function (event) {
  // prevent auto-page refresh
  event.preventDefault()

  const data = getFormFields(event.target)
  // console.log(`events onCreateBike data is = ${data}`)
  // console.log(`events onCreateBike data.bike.style is = ${data.bike.style}`)
  // console.log(`events onCreateBike data.bike.size is = ${data.bike.size}`)

  api.createBike(data)
    .then(ui.createBikeSuccess)
    .catch(ui.createBikeFailure)
}

const onUpdateBike = function (event) {
  // prevent auto-page refresh
  event.preventDefault()

  const data = getFormFields(event.target)
  // console.log(`events onUpdateBike data is = ${data}`)
  // console.log(`events onUpdateBike data.bike.id is = ${data.bike.id}`)
  // console.log(`events onUpdateBike data.bike.style is = ${data.bike.style}`)
  // console.log(`events onUpdateBike data.bike.size is = ${data.bike.size}`)

  api.updateBike(data)
    .then(ui.updateBikeSuccess)
    .catch(ui.updateBikeFailure)
}

const onDeleteBike = function (event) {
  // prevent auto-page refresh
  event.preventDefault()

  const data = getFormFields(event.target)
  // console.log(`events onDeleteBike data is = ${data}`)
  // console.log(`events onDeleteBike data.bike.id is = ${data.bike.id}`)

  if (confirm('Are you sure you want to delete this bike?')) {
    api.deleteBike(data)
      .then(ui.deleteBikeSuccess)
      .catch(ui.deleteBikeFailure)
  }
}

module.exports = {
  onIndexBikes,
  onShowBike,
  onCreateBike,
  onUpdateBike,
  onDeleteBike
}
