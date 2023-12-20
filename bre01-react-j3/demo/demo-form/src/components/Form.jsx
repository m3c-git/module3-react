import { useState } from 'react'

const Form = (props) => {
  const [value, setValue] = useState("");
  
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue(event.target.username.value);
  };

   return (
      <>
      {
        value !== "" && (
          <p>Dernier ajout : {value}</p>
        )
      }
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
          	name="username"
          	id="username"
            type="text"
            value={value}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
      </>
    );
};

export default Form;