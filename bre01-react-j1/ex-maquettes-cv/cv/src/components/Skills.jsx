import {posts, skills} from '../data.js';

const Skills = (props) => {

    return (
        <>
          <section>
                <h2>Compétences</h2>
                <ul>
                    {skills.map((skill, i) => <li key={i}> 
                    {skill.name} : {skill.grade} / 5
                    </li>)}
                </ul>
            </section>  
        </>

    )
}

export default Skills;