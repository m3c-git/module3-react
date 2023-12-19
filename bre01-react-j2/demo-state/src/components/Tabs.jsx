import { useState } from 'react'

<article className="dismissed">
    <p>
        Ceci est le texte de mon message
    </p>
    <button onClick={dismiss}>X</button>
</article>

const Tabs = (props) => {
    const [message, setMessage] = useState('true');

    function actif()
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
                    <article className="actif">
                        <h1>Titre message</h1>
                        <p>
                            Ceci est le texte de mon message
                        </p>
                    </article>
                )
            }

            {
                message === 'false' && (
                    <article className="inactif">
                        <p>
                            Ceci est le texte de mon message
                        </p>
                        <button onClick={dismiss}>X</button>
                    </article>
                )
            }
        </>
    )
}

export default ToastMessage;