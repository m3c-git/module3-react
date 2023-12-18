import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './component/Student';

const students = [
  { notes: [12, 11, 10], name: "Alan" },
  { notes: [18, 10, 19], name: "Alice" },
  { notes: [10, 9, 11], name: "Bernard" },
  { notes: [11, 17, 19], name: "Sophie" },
];

function App(pros) {

  return (
    <>
      <section>
          <h2>Étudiant-e-s</h2> 
          <ul>
            {students.map((student, i) => <li key={i}> 
              <Student  data={student}/>
            </li>)}
          </ul>
      </section>
       
   </>
  )
}

export default App
