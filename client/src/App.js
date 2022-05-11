import {BrowserRouter, Route, Switch} from "react-router-dom"
import { useState, useEffect, useContext } from "react"
// import { useParams } from 'react-router-dom'
import { UserContext } from "./context/user"
// import { WorkoutContext } from "./context/workout"
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
import Signup2 from "./components/Signup2"
import Notification from "./components/Notification"
import Logout from "./components/Logout"

function App() {
  // debugger
  const {user, setUser} = useContext(UserContext);
  const [exercise, setExercise] = useState();
  const [workout, setWorkout] = useState(null);
  // const {id} = useParams()

  useEffect(() => {
    fetch("http://127.0.0.1:9393/me")
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

  // useEffect(() => {
  //   fetch("http://127.0.0.1:9393/exercises")
  //   .then((response) => {
  //     if (response.ok)  {
  //       response.json().then((data) => {
  //         setExercise(data)
  //         console.log(data)
  //       });
  //     } else {
  //       response.json().then((error) => console.log(error.error))
  //     }
  //   })
  //   .catch(error => console.log(error))
  // })
  useEffect(() => {
    const fetchData = async () => {
        try {
            const resp = await fetch("http://127.0.0.1:9393/exercises");
            const data = await resp.json();
            setExercise(data);
            // setLoading(false);
        } catch (error) {
            alert(error);
        }
    };
    fetchData();
}, []);
      
 // need to call server and ask for all workouts
  useEffect(() => {
    fetch(`http://127.0.0.1:9393/workouts`)
    .then((response) => {
      if (response.ok) {
        response.json().then((workout) => {
          setWorkout(workout)
        });
      } else {
          response.json().then((error) => console.log(error.error))
      }
    })
    .catch(error => console.log(error))
  }, [user]);

  return (
    <div className="App">

      <BrowserRouter >

      <Notification />
      
      <Navbar />

      <Header />

        <Switch >

        <Route path="/exercises/new">
          <ExerciseForm workout={workout} />
        </Route>

        <Route path="/exercises/:id">
          <ExerciseCard workout={workout} setWorkout={setWorkout} />
        </Route>

        <Route path="/exercises">
          <ExercisesContainer exercise={exercise} workout={workout} setWorkout={setWorkout} />
        </Route>
          
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/logout">
          <Logout />
        </Route>

        <Route path="/profile">
        <Profile exercise={exercise} workout={workout} setWorkout={setWorkout} />
        </Route>

        <Route path="/signup">
        <Signup />
        </Route>

        <Route path="/signup">
        <Signup2 />
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
