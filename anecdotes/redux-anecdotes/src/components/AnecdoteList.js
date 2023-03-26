import { useSelector, useDispatch } from 'react-redux';
import { voteForAnecdote } from '../reducers/anecdoteReducer';
import { createNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const filter = useSelector((state) => state.anecdoteFilter), anecdotes = useSelector((state) => state.anecdotes.filter((anecdote) =>
  anecdote.content.toLowerCase().includes(filter.toLowerCase())).sort((a, b) => b.votes - a.votes));
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteForAnecdote(id));
    createNotification(dispatch,`Anecdote voted: "${anecdotes.find((anecdote) => anecdote.id === id).content}"`
    );
  };

  return anecdotes.map((anecdote) => (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes} votes
        <button onClick={() => vote(anecdote.id)}>Vote</button>
      </div>
    </div>
  ));
};

export default AnecdoteList;