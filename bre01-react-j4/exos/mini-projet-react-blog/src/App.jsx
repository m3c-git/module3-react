import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './components/Post'
import Blog from './components/Blog'


function App() {
  const [state, setState] = useState({
    currentPost : false
  })
  

  const articleChoice = (postNb) =>{
     state.currentPost = postNb
   
  }
  return (
    <>
      {state.currentPost === null &&(
        <Blog />
      )}

      {state.currentPost !== null &&(
        <Post />
      )}
      
    </>
  )
}

export default App
