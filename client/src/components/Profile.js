import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/user";
import {Redirect} from 'react-router-dom';
import {MessageContext} from "../context/message"
import { useHistory } from 'react-router-dom';


function Profile({ exercise, workout, setWorkout } ) {
  const { user, destroyed } = useContext(UserContext);
  const {setMessage} = useContext(MessageContext);
  const history = useHistory()

  

  if (!user) return <Redirect to="/login" />

  else 
  console.log(user)
  console.log(user.workout)
  console.log(exercise)
  setWorkout(user.workout)



  function handleClick() {

    console.log("delete profile")
    setMessage({message: "Your profile has been destroyed.", color: "green"})
    destroyed(user)
    history.push("/")
  }

  return (
    <div id="profile">
      <h5>Let's get some info in here, shall we???</h5>
       
      <h3>{user.username}'s Workout:</h3>
      <h4>Email:{user.email}</h4>
      <h5>Age: {user.age}</h5>
      {user.workout ? <h2>Number of Exercises: {user.workout.length}</h2>: "Add an exercise to your workout"}
      <br></br>
      <h5>Exercises go here:</h5>
      <br></br>
      <button onClick={handleClick}>Delete Profile</button>
      <br></br>
          {user.workout.map(workout => (
            <div key={Math.random()}>
              <h4>Exercise (workout.exercise_id): {workout.exercise_id}</h4>
              {/* <h4>Exercise Name: {exercise.find(x => x.id === workout.exercise_id).exercise_name}</h4> */}
              {/* <h4>Exercise Name: {workout.find(x => x.id === workout.exercise_id).exercise_name}</h4> */}
              {/* <h4>Exercise Name: {workout.exercise_name}</h4> */}
              <li>Weight: {workout.weight}</li>
              <li>Sets: {workout.sets}</li>
              <li>Reps: {workout.reps}</li>
            </div>
          ))}
    </div>
  );
          
}
export default Profile;