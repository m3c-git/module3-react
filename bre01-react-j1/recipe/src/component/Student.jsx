const Student = (props) => {

    return (
        <>
            <section>
  <h2>Étudiant-e-s</h2>
  <ul>
    <li>
      <article>
        <h3>
          {props.students}
        </h3>
        <ul>
          <li>
            12
          </li>
          <li>
            11
          </li>
          <li>
            10
          </li>
        </ul>
      </article>
    </li>
    [...]
  </ul>
</section>
        </>

    )
}




export default Student;