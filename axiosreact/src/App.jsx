import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

import Featch from './Featch'

function App() {
  const [myData, setMyData] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => setMyData(res.data));
    
  }, []);

  return (
    <>
{/*     
    <h1>Axios Tutorial</h1>
    < div className='grid'>
  
    {myData.map((post) => {
      
      const {id, title, body} = post;
      return (
      <div className='card' key={id}>
        <h2>{title.slice(0, 15).toUpperCase()}</h2>
        <p>{body.slice(0, 100)}</p>
      </div>
      );
    })}
    </div> */}
    
    <Featch/> 
       {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
