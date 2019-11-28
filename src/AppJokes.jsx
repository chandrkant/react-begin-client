import React from 'react'
import Jokes from './Jokes.jsx'
import JokesData from './JokesData.jsx'
function App(){
  const JokesContent = JokesData.map(joke => <Jokes key={joke.id} question = {joke.question} punchLine= {joke.punchLine} /> )
  return(
    <div>
      {JokesContent}
    </div>
    )
}
export default App;
