// Controlled Forms

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add state here for the `username` using React.useState('')
  const [username, setUsername] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    // 🐨 this change is not required, but since we're controlling the username
    // state ourselves anyway, we know what the value is without having to
    // reach through the form's elements, so you can pass `username` here instead
    onSubmitUsername(username)
  }

  // 🐨 add an event handler here called `handleChange` which accepts the event
  // and calls setUsername with the lower case version of the input's value
  // 💰 event.target.value.toLowerCase()
  function handleChange(event){
    const name = event.target.value.toLowerCase()
    setUsername(name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
          // 🐨 add an onChange prop here and pass `handleChange`
          // 🐨 set the value here to the `username` state
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function Usage() {
  const onSubmitUsername = username => console.info('username', username)
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}

export default Usage
