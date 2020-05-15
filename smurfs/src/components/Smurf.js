import React, {useContext} from 'react'

import { SmurfContext } from '../contexts/';

const Smurf = () => {

  const {smurfs, deleteSmurf } = useContext(SmurfContext)
  
  return (
    <div >
    
      {smurfs.map(smurf => (
        <div key={smurf.id}>
        <h3>Name: {smurf.name}</h3>
      <p>Height: {smurf.height}</p>
          <p>Age: {smurf.age}</p>
          
          <button onClick={() => deleteSmurf(smurf.id)}>X</button>
          </div>
      ))}
     
  </div>
  )
}

export default Smurf;