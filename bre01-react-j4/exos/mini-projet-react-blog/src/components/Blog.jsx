import '../Blog.css'
import {blogPosts} from "../data/data.js";

const Blog = (props)=>{
    
    return (
        <>
            <h1>Le blog</h1>
            
            <ul>
                {blogPosts.map((blogPost, i) => <li key={i}>
                    <article>
                        <header>
                            <figure>
                                <img src={blogPost.thumbnail} alt="Image aléatoire de démonstration"/>
                            </figure>
                            <h2>
                            {blogPost.title}
                            </h2>
                        </header>
                        <section>
                            <p>
                                Par {blogPost.expert}
                            </p>
                            <p>
                            {blogPost.excerpt}
                            </p>
                        </section>
                        <footer>
                            <button onClick={props.articleChoice(i)}><a href="">Lire l'article</a></button>
                        </footer>
                    </article>
                </li>)}
            </ul>
            

    
        </>

    );

};

export default Blog;