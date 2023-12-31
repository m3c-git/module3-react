import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostList from './components/PostList.jsx'

function App() {
  const [state, setState] = useState({
      currentPost : null,
      posts : []

  });

 

  // Array.slice : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
              return response.json();
          })
          .then((data) => {
              let posts = data.slice(0, 5);

              setState({
                  posts: posts
              });
          });
  }, {});

  return (
    <>
        
        <PostList posts={state.posts} />

    </>
  )
}

export default App
