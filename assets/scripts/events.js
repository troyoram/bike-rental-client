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
  event.preventDefault()

  const data = getFormFields(event.target)

  api.showBike(data)
    .then(ui.showBikeSuccess)
    .catch(ui.showBikeFailure)
}

const onCreateBike = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.createBike(data)
    .then(ui.createBikeSuccess)
    .catch(ui.createBikeFailure)
}

const onUpdateBike = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.updateBike(data)
    .then(ui.updateBikeSuccess)
    .catch(ui.updateBikeFailure)
}

const onDeleteBike = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

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
