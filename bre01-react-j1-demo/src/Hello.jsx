import ShoppingList from './ShoppingList.jsx';

const Hello = (props) => {
    return (
        <article className="heading" >
            <h1>Hello</h1>
            <p>Comment ça va ?</p>
            <ShoppingList />
        </article>
    )
}

export default Hello;