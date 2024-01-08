import { useState } from 'react'
import { posts } from "./data.js";
import { Posts } from "./components/Posts.jsx";
import './App.css'

function App() {
    const [state, setState] = useState({
        posts : posts
    });

  return (
    <>
        <Posts posts={state.posts} />
        <section className="add-post">

        </section>
    </>
  )
}

export default App