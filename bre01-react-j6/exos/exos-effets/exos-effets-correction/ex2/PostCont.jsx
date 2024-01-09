import { useState, useEffect } from 'react';

const PostCont = (props) => {

    const [state, setState] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + props.postId)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setState(data); // J'utilise setState pour mettre le contenu récupéré dans mon composant
            });
    }, {});

    return(
        <article>
            <h1>{state.title}</h1>
            <p>
                {state.body}
            </p>
            <p>
                Auteur : {state.userId}
            </p>
        </article>
    )
}

export default PostCont