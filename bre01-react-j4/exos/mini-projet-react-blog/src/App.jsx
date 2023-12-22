import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './components/Post'
import Blog from './components/Blog'
import {blogPosts} from "./data/data.js";


function App() {
  const [state, setState] = useState({
    currentPost : null,
    postNb : 0
  })
  
  // state.currentPost ou state.currentPost permet de recupérer un element de l'objet state.
  return (
    <>
      {state.currentPost === null &&(
        <Blog  posts={blogPosts} post={(postNb) => setState({currentPost : postNb})}/>
      )}

      {state.currentPost !== null &&(
        <Post post={blogPosts[state.currentPost]} posts={() => setState({currentPost : null})}/>
      )}
      
    </>
  )
}

export default App
