import { useState, useEffect } from 'react';

const PostList = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/5')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setState(data); // J'utilise setState pour mettre le contenu récupéré dans mon composant
      });
  }, {}); // le {} est l'état initial de l'effet
  return (
    <article>
        <h1>{ state.title }</h1>
        <p>
            { state.body }
        </p>
    </article>
  );
};

export {PostList};