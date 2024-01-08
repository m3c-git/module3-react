function Posts(props) {
    return(
        <section className="posts">
            <ul>
                {
                    props.posts.map((post, i) =>
                        <li key={i}>
                            <article>
                                <h1>
                                    { post.title }
                                </h1>
                                <p>
                                    { post.body }
                                </p>
                            </article>
                        </li>
                    )
                }
            </ul>
        </section>
    );
}

export { Posts };