const { configureStore } = require('@reduxjs/toolkit')

const counter = require('./slices/counter')

const store = configureStore({
  reducer: {
    counter: counter.reducer
  }
})

module.exports = store