import { useState } from 'react';
import PostCont from '../../src/components/PostCont';

const PostList = (props) => {
    const [state, setState] = useState({
        currentPost : null,
    });

    function pickArticle(id)
    {
        setState({currentPost: id});
    }

    if(state.currentPost === null)
    {
        return (
            <ul className="posts">
                {
                    props.posts.map((post, i) =>
                        <li key={i}>
                            <article>
                                <h2>
                                    { post.title }
                                </h2>
                                <p>
                                    { post.body }
                                </p>
                                <button onClick={() => pickArticle(post.id)}>Lire l'article</button>
                            </article>
                        </li>
                    )
                }
            </ul>
        )
    }
    else
    {
        return(
            <>
                <PostCont postId={state.currentPost}/>
            </>
        )
    }
}

export default PostList
