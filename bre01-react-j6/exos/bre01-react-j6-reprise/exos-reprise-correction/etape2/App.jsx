import { useState } from 'react'
import { posts } from "./data.js";
import { Posts } from "./components/Posts.jsx";
import './App.css'
import {PostForm} from "./components/PostForm.jsx";

function App() {
    const [state, setState] = useState({
        posts : posts
    });

    const addPost = (post) => {

        let posts = state.posts;
        posts.push(post);

        setState({posts : posts});
    }

  return (
    <>
        <Posts posts={state.posts} />
        <PostForm handleSubmit={ (post) => { addPost(post) }}/>
    </>
  )
}

export default App