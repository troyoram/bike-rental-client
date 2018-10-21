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
  // console.log(`api showBike data is = ${data.bike.id}`)
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
  // console.log(`api createBike data.bikes.style is = ${data.bike.style}`)
  // console.log(`api createBike data.bikes.size is = ${data.bike.size}`)
  // console.log(`api createBike data.user.token is = ${store.user.token}`)
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
  // console.log(`api updateBike data.bikes.id is = ${data.bike.id}`)
  // console.log(`api updateBike data.bikes.style is = ${data.bike.style}`)
  // console.log(`api updateBike data.bikes.size is = ${data.bike.size}`)
  // console.log(`api updateBike data.user.token is = ${store.user.token}`)
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
  // console.log(`api deleteBike data.bikes.id is = ${data.bike.id}`)
  // console.log(`api deleteBike data.user.token is = ${store.user.token}`)
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
