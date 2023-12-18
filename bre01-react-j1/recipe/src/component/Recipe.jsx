
import Steps from "./Steps";

const Recipe = (props) => {
    const items = ['Oeufs', 'Lait', 'Farine', 'Beurre'];

    return (
        <>
            <article>
                <h2>La recette de la pâte à crèpes</h2>
                <h3>Ingrédients</h3>
                <ul>
                    {items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <Steps />
            </article>
        </>

    )
}




export default Recipe;