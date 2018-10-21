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
  console.log(`api showBike data is = ${data.bike.id}`)
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
  // console.log(`api createBike store.bikes.style is = ${store.bike.style}`)
  // console.log(`api createBike store.bikes.size is = ${store.bike.size}`)
  // console.log(`api createBike store.user.token is = ${store.user.token}`)
  console.log(`api createBike data.bikes.style is = ${data.bike.style}`)
  console.log(`api createBike data.bikes.size is = ${data.bike.size}`)
  console.log(`api createBike data.user.token is = ${store.user.token}`)
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

const showGame = function (data) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      game: {
        cell: {
          index: store.game.index,
          value: store.game.value
        },
        over: store.game.over
      }
    }
  })
}

const indexGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
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
  showGame,
  updateGame,
  indexGame
}
