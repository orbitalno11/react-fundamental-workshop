// useState: counter

// http://localhost:3000/isolated/exercise/10

import React from 'react'

function Counter() {
  // 🐨 use React.useState here
  const [counter, setCounter] = React.useState(0)
  // 🐨 create an increment function that calls the state updater you get from
  //    React.useState to increment the count
  const handleChange = event => {
    const value = counter + 1
    setCounter(value)
  }
  // 🐨 render the count you get from React.useState inside the button and use
  //    your increment function as the onClick handler.
  return <button onClick={handleChange}>{counter}</button>
}

function Usage() {
  return <Counter />
}

export default Usage
