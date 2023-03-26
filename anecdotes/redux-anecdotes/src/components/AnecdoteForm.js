import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleAddAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    dispatch(addAnecdote(content))
    event.target.anecdote.value = ''
  }

  return (
    <div>
      <h2>Create new anecdote</h2>
      <form onSubmit={handleAddAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
