import React from 'react';

const Form = (props) =>{
  return(
    <form>
      <input type="text" name='city' placeholder="City..."/>
      <input type="text" name='country' placeholder="Country..."/>
      <button>Get Weather</button>
    </form>
  )
}

export default Form;
