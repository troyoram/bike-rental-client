'use strict'

const config = require('./config.js')
const store = require('./store.js')

const indexBikes = function (data) {
  return $.ajax({
    url: config.apiUrl + '/bikes',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const showBike = function (data) {
  return $.ajax({
    url: config.apiUrl + `/bikes/${data.bike.id}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const createBike = function (data) {
  return $.ajax({
    url: config.apiUrl + '/bikes',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      bike: {
        style: data.bike.style,
        size: data.bike.size
      }
    }
  })
}

const updateBike = function (data) {
  return $.ajax({
    url: config.apiUrl + `/bikes/${data.bike.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      bike: {
        style: data.bike.style,
        size: data.bike.size
      }
    }
  })
}

const deleteBike = function (data) {
  return $.ajax({
    url: config.apiUrl + `/bikes/${data.bike.id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

module.exports = {
  indexBikes,
  showBike,
  createBike,
  updateBike,
  deleteBike
}
