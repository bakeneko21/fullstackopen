// satunnaislukulähde: https://www.w3schools.com/js/js_random.asp
// indeksin käyttäminen: https://www.w3schools.com/jsref/jsref_indexof_array.asp

import { useState } from 'react'

const Button = (props) => {
  console.log('button ', props)
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const anecdotesLength = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [addOne, setAddOne] = useState(new Uint8Array(anecdotesLength)) //käytetään state hookia jotta äänestystulos saadaan uudelleenrenderöityä
  let index = addOne.indexOf(Math.max(...addOne))

  const handleNextClick = () => {
    const newAnecdote =  Math.floor(Math.random()*anecdotesLength)

    setSelected(newAnecdote)     
    
  }

  const handleVote = () => {
    const vote = [...addOne]
    vote[selected] += 1
    
    setAddOne(vote)            
    
  }
  
  console.log('handleVote jälkeen: ', addOne[selected], index)  
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {addOne[selected]} votes</p>
      <Button onClick = {handleVote} text = 'vote'/>
      <Button onClick = {handleNextClick} text = 'next anecdote'/>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[index]}</p>
      <p>has {addOne[index]} votes</p>
    </div>
  )
}

export default App