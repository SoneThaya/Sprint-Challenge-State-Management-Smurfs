import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from './Navbar';
import Smurf from './Smurf';
import AddSmurf from './AddSmurf'

import { SmurfContext } from '../contexts/index'

import axios from 'axios'

const url = 'http://localhost:3333/smurfs/';
export default function App() {
  const [smurfs, setSmurfs] = useState([])
 
  // url for GET and POST requests
const getSmurfs = () => {
  axios.get(url)
    .then(res => {
      console.log(res.data)
      setSmurfs(res.data)
    })
  }
  useEffect(() => {
    getSmurfs()
  }, [])

  const postSmurf = smurf => {
    
    axios
      .post(url, smurf)
      .then(res => {
        console.log(res.data)
        setSmurfs([...smurfs, smurf])
      })
      .catch(err => console.log(err))
  }

  const deleteSmurf = id => {
    const removedSmurf = smurfs.filter(item => item.id !== id)
    axios
      .delete(url + id)
      .then(res => {
        console.log(res)
        setSmurfs([...removedSmurf])
      })
      .catch(err => console.log(err))
  }
  
  const addSmurf = e => {
    e.preventDefault()
    postSmurf(newSmurf)
  }

  const [newSmurf, setNewSmurf] = useState({name: '', height: '', age: '', id: ''})
  const inputChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value })
  }

    return (
      <div className="App">
        
        <SmurfContext.Provider value={{smurfs, getSmurfs, postSmurf, inputChange, addSmurf, deleteSmurf }}>
          <Navbar />
          <AddSmurf />
          <Smurf />
        </SmurfContext.Provider>

      </div>
    );
  
}


