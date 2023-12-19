import {posts, skills} from '../data.js';

const Posts = (props) => {

    return (
        <>
          <section>
                <h2>Publications</h2>
                <ul>
                {posts.map((post, i) => <li key={i}>
                    <article>
                        <img src={post.image} alt={post.alt} />
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        
                    </article>
                </li>)}
                </ul>
            </section>
        </>

    )
}

export default Posts;


