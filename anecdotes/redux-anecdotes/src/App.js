import {React, useEffect} from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import anecdotes from './services/axios'
import { setAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {(async () => dispatch(setAnecdotes(await anecdotes.getAll())))();}, [dispatch]);

  return (
    <div>
      <h2>Here are famous programming anecdotes</h2>
      <Notification/>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
