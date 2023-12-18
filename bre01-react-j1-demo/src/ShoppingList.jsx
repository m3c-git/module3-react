const ShoppingList = (props) => {
    const items = ['Pain', 'Beurre', 'Boursin'];

    return (
        <>
            <h1>
                Ma liste de courses
            </h1>
            <ul>
                {items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </>

    )
}

export default ShoppingList;