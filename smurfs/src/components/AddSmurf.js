import React, { useContext } from 'react'
import { SmurfContext } from '../contexts/index';

const AddSmurf = () => {

  const {  inputChange, addSmurf } = useContext(SmurfContext)
  
  return (
    <form onSubmit={addSmurf}>
      <input type="text" name="name" onChange={inputChange} placeholder='name' />
      <input type="text" name="height" onChange={inputChange} placeholder='height' />
      <input type="text" name="age" onChange={inputChange} placeholder='age' />
      <input type="text" name="id" onChange={inputChange} placeholder='id' />
      <button>Submit</button>
    </form>
  )
}

export default AddSmurf