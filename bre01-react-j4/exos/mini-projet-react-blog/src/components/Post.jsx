import '../Post.css'

const Post = (props) => {
    return (

        <>
            <article className="post">
                <header>
                    <figure>
                        <img src="https://picsum.photos/1200/600/?random" alt="image aléatoire de démonstration" />
                    </figure>
                    <h1>Démarrer avec Réactivité : Créer votre première application React avec Vite</h1>
                </header>
                <section dangerouslySetInnerHTML={{ __html: props.post.content }}>
                    
                </section>
                <footer>
                    <article>
                        <img src="https://i.pravatar.cc/150?img=69" alt="Image de profil de Jean Dupont, Développeur React expérimenté" />
                        <p>par Jean Dupont, Développeur React expérimenté</p>
                    </article>
                    <button onClick={props.posts}>Retour au blog</button>
                </footer>
            </article>
        
        </>
    );

};

export default Post