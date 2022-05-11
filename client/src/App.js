import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { UserContext } from "./context/user"

import Navbar from "./components/Navbar"


function App() {
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    fetch("/me")
    .then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user)
          console.log(user)
        });
      } else {
        response.json().then((error) => console.log(error.error))
      }
    })
    .catch(error => console.log(error))
  }, [user, setUser]);

  return (
    <div className="App">
            <Navbar />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          and be Dank. You can do this. 
        </a>
      </header>
    </div>
  );
}

export default App;
