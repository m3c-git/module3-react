import '../Post.css'
import {blogPosts} from "../data/data.js";

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
                <section>
                    <p>React a révolutionné le développement web. Pour vous lancer, plongeons dans la création d'une application React avec Vite. Vite, un outil de construction rapide, offre une combinaison puissante avec React. Suivez ces étapes détaillées pour commencer votre voyage avec Réact et Vite.</p>

                    <h2>Étape 1 : Installation de Vite</h2>
                    <p>Commencez par installer Vite via npm (Node Package Manager). Utilisez la commande suivante dans votre terminal :</p>

                    <pre><code>npm create vite my-react-app
cd my-react-app
npm install</code></pre>

                    <h2>Étape 2 : Développement interactif</h2>
                    <p>Expérimentez l'environnement de développement interactif de Vite. Lancez le serveur de développement avec la commande :</p>

                    <pre><code>npm run dev</code></pre>

                    <p>Vite surveille automatiquement les modifications, offrant une expérience de développement fluide.</p>

                    <h2>Étape 3 : Composants React</h2>
                    <p>Explorez la création de composants React dans le répertoire "src". Vite prend en charge JSX, rendant le processus familier.</p>

                    <h2>Étape 4 : Construction pour la production</h2>
                    <p>Finalisez votre application avec la commande :</p>

                    <pre><code>npm run build</code></pre>

                    <p>Votre application est désormais prête à être déployée !</p>

                    <p>En suivant ces étapes approfondies, vous avez établi une base solide pour développer des applications React modernes avec Vite. Explorez davantage pour maîtriser toutes les fonctionnalités.</p>
                </section>
                <footer>
                    <article>
                        <img src="https://i.pravatar.cc/150?img=69" alt="Image de profil de Jean Dupont, Développeur React expérimenté" />
                        <p>par Jean Dupont, Développeur React expérimenté</p>
                    </article>
                </footer>
            </article>
        
        </>
    );

};

export default Post