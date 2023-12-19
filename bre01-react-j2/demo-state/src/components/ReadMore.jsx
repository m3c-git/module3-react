import { useState } from 'react'

const ReadMore = (props) => {
    const [message, setMessage] = useState('true');

    function toggleOpen()
    {
        if(message === "true")
            setMessage("false");
        else
            setMessage("true");
    }

    return (
        <>
            {
                message === 'true' && (
                    <article>
                        <header>
                            <h2>
                                Le titre de l'article
                            </h2>
                        </header>
                        <section>
                            Le corps de l'article
                        </section>
                        <footer>
                            <button onClick={toggleOpen}>Voir moins</button>
                        </footer>
                    </article>
                )
            }

            {
                message === 'false' && (
                    <article>
                        <header>
                            <h2>
                                Le titre de l'article
                            </h2>
                        </header>
                        <footer>
                            <button onClick={toggleOpen}>Voir plus</button>
                        </footer>
                    </article>
                )
            }
        </>
    )
}

export default ReadMore;