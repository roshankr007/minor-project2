import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] =useState([]); //initially empty array of jokes


  useEffect(() => {
    axios.get('/api/jokes') /* we just write /api/jokes as we have standadized the url that from 
                              anywhere this get request can be made (from any port)*/
    .then((response) => {
      // console.log(response.data)
      setJokes(response.data)
    }
    )
    .catch((error) => {
      console.error(error);
    }
    )
  })
  return (
    <>
      <h1>chai and code</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke) => {
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        })
      }
    </>
  )
}

export default App
