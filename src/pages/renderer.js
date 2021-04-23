const store = require('../data/store')
const counter = require('../data/slices/counter')

const { increment, decrement } = counter.actions

window.onload = () => {
  const counterValue = document.getElementById('counterValue')
  const btnIncrement = document.getElementById('btnIncrement')
  const btnDecrement = document.getElementById('btnDecrement')

  counterValue.innerHTML = store.getState().counter.count

  btnIncrement.addEventListener('click', e => {
    e.preventDefault()
    store.dispatch(
      increment()
    )

    counterValue.innerHTML = store.getState().counter.count
  })

  btnDecrement.addEventListener('click', e => {
    e.preventDefault()
    store.dispatch(
      decrement()
    )

    counterValue.innerHTML = store.getState().counter.count
  })
}