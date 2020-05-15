import React, {useContext} from 'react'

import { SmurfContext } from '../contexts/';

const Smurf = () => {

  const {smurfs, removeSmurf } = useContext(SmurfContext)
  console.log(smurfs)
  
  
  return (
    <div >
    
      {smurfs.map(smurf => (
        <div key={smurf.id}>
        <h3>Name: {smurf.name}</h3>
      <p>Height: {smurf.height}</p>
      <p>Age: {smurf.age}</p>
          <button onClick={removeSmurf}>X</button>
          </div>
      ))}
     
  </div>
  )
}

export default Smurf;