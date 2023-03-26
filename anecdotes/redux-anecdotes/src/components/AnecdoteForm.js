import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleAddAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(addAnecdote(content))
    createNotification(dispatch, ` Anecdote added:"${content}"`)
    
  }

  return (
    <div>
      <h2>Create new anecdote</h2>
      <form onSubmit={handleAddAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">Add new anecdote</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
