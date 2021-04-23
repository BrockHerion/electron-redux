const { createSlice } = require('@reduxjs/toolkit')

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => { 
      state.count -= 1
    }
  }
})

module.exports = counter