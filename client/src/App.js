import {BrowserRouter, Route, Switch} from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { UserContext } from "./context/user"
import './App.css'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Home from "./components/Home"
import ExerciseForm from "./components/ExerciseForm"
import ExerciseCard from "./components/ExerciseCard"
import ExercisesContainer from "./containers/ExercisesContainer"
import Profile from "./components/Profile"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Notification from "./components/Notification"
import Logout from "./components/Logout"

function App() {
  const {getCurrentUser, setWorkout} = useContext(UserContext);
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
      getCurrentUser()
  }, [getCurrentUser])

// need to call server and ask for all exercises
  useEffect(() => {
    const fetchData = async () => {
        try {
            const resp = await fetch("/exercises");
            const data = await resp.json();
            setExercise(data);
        } catch (error) {
            alert(error);
        }
    };
    fetchData();
}, []);

  return (
    <div className="App">

      <BrowserRouter >

      <Notification />
      
      <Navbar />

      <Header />

        <Switch >

        <Route path="/exercises/new">
          <ExerciseForm setWorkout={setWorkout} exercise={exercise}/>
        </Route>

        <Route path="/exercises/:id">
          <ExerciseCard setWorkout={setWorkout} />
        </Route>

        <Route path="/exercises">
          <ExercisesContainer exercise={exercise} setWorkout={setWorkout} />
        </Route>
          
        <Route path="/login"> 
          <Login />
        </Route>

        <Route path="/logout">
          <Logout />
        </Route>

        <Route path="/profile">
        <Profile exercise={exercise} setWorkout={setWorkout} />
        </Route>

        <Route path="/signup">
        <Signup />
        </Route>

        <Route path="/">
          <Home />
        </Route>

        </Switch >

      </BrowserRouter >

    </div>
  ); 
}

export default App;
