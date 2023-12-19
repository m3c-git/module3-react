import { useState } from 'react'

const ToastMessage = (props) => {
    const [message, setMessage] = useState('true');

    function dismiss()
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
                    <article className="toastMessage">
                        <p>
                            Ceci est le texte de mon message
                        </p>
                        <button onClick={dismiss}>X</button>
                    </article>
                )
            }

            {
                message === 'false' && (
                    <article className="dismissed">
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