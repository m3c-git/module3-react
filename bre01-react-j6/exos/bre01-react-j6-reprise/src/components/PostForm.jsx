function PostForm(props) {
    const submit = (event) => {
        event.preventDefault();

        const post = {
            title : event.target.title.value,
            body : event.target.body.value
        }

        console.log(post);

        props.handleSubmit(post);
    }

    return(
        <section className="add-post">
            <form onSubmit={submit}>
                <fieldset>
                    <label htmlFor="title">
                        Titre
                    </label>
                    <input type="text" name="title" id="title" />
                </fieldset>
                <fieldset>
                    <label htmlFor="body">
                        Contenu
                    </label>
                    <input type="text" name="body" id="body" />
                </fieldset>
                <button type="submit">Ajouter</button>
            </form>
        </section>
    );
}

export { PostForm };