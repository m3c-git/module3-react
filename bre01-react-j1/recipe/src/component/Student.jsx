
const Student = (props) => {
  const notes = props.data.notes;

  function moyenne (value){
    let sum = 0;
    for(let i = 0; i < value.length; i++){

      sum += value[i];

    }
    return sum / value.length;

  }

    return (
        <>
          <article>
                  <h3>
                    {props.data.name}
                  </h3>
                  <ul>
                    {notes.map((note, i) => <li key={i}> 
                    {note}
                    </li>)}
                </ul>
                <p>
                  Moyenne : {moyenne(notes)}
                </p>
                </article>
        </>

    )
}




export default Student;