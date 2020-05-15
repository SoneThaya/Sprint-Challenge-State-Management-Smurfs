import React, {useContext} from 'react';
import {SmurfContext} from '../contexts/index'

const Navbar = () => {

  const { smurfs, setSmurfs } = useContext(SmurfContext)
  
  return (
    <div className="navbar">
     
        <h3>Smurf List</h3>
        <p>Number of Smurfs: {smurfs.length}</p>
    
  </div>
  )
}

export default Navbar;