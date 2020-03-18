// useCounter: custom hooks

// http://localhost:3000/isolated/exercise/11

import React from 'react'

// 🐨 Make a custom hook called useCounter that accepts the step and
// initialCount and returns the count and increment functions]
function useCounter({ step = 1, initialCount = 0 } = {}) {
  const [count, setCount] = React.useState(initialCount)
  const increment = () => setCount(c => c + step)
  return [count, increment]
}

function Counter({ step, initialCount }) {
  // 💣 remove this (or move it to your custom hook)
  const [count, increment] = useCounter({step, initialCount})
  // 🐨 Use your custom useCounter hook to get `count` and `increment`
  return <button onClick={increment}>{count}</button>
}

function Usage() {
  return <Counter />
}

export default Usage
