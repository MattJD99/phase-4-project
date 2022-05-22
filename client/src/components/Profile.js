import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/user";
import {Redirect} from 'react-router-dom';
import {MessageContext} from "../context/message"
import { useHistory } from 'react-router-dom';


function Profile({ workout, setWorkout } ) {
  const { user, destroyed } = useContext(UserContext);
  const {setMessage} = useContext(MessageContext);
  const history = useHistory()


  // debugger
  // if (!user) return <Redirect to="/login" />
  if (!user) return <div>loading....</div>
  console.log(user)
  // useEffect(() => {
  //   fetch(`http://127.0.0.1:9393/workouts/${user.id}`)
  //   .then((response) => {
  //     if (response.ok) {
  //       response.json().then((data) => {
  //         setWorkout(data)
  //       });
  //     } else {
  //         response.json().then((error) => console.log(error.error))
  //     }
  //   })
  //   .catch(error => console.log(error))
  // }, [user, setWorkout]);
  // debugger

  function handleClick() {

    console.log("delete profile")
    // setMessage({message: "Your profile has been destroyed.", color: "green"})
    destroyed(user)
    history.push("/")
  }

  return (
    <div id="profile">
      <h5>Let's get some info in here, shall we???</h5>
       {/* <h2>{user.username}'s Profile</h2> */}
       
      <h3>{user.username}'s Workout:</h3>
      <h4>Email:{user.email}</h4>
      <h5>Age: {user.age}</h5>
      {workout ? <h6>Workout ID: {workout.id}</h6>: "Add an exercise to your workout"}
      <br></br>
      <button onClick={handleClick}>Delete Profile</button>
          {/* {workouts.map(workout => (
            <div key={workout.id}>
              <h4>Exercise: {workout.exercise_name}</h4>
              <li>Weight: {workout.weight}</li>
              <li>Sets: {workout.sets}</li>
              <li>Reps: {workout.reps}</li>
            </div>
          ))} */}
    </div>
  );
          
}
export default Profile;