import { useState, useEffect } from 'react';
import Ex1Posts from "./components/ex-1/Posts.jsx";
import './App.css'
import Ex2Posts from "./components/ex-2/Posts.jsx";

function App() {
  const [state, setState] = useState({
      posts : [],
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
        <Ex1Posts posts={state.posts} />
    </>
  )
}

export default App