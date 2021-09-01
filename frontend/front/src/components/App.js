import logo from '../logo.svg';
import '../App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AppForm from './AppForm';

function App() {
  const [getMessage, setGetMessage] = useState({})
  useEffect(()=>{
    axios.get('http://localhost:5000/').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>ml-flask-react-intro</p>
        <div>{getMessage.status === 200 ?
          <h3>{getMessage.data.Message}</h3>
          :
          <h3>LOADING</h3>}
          <AppForm/>
        </div>
      </header>
    </div>
  );
}

export default App;
