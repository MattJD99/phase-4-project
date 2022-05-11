import { useContext, useEffect } from "react";
import { UserContext } from "../context/user";

function Profile({ workout, setWorkout } ) {
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch(`http://127.0.0.1:9393/workouts/${user.id}`)
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setWorkout(data)
        });
      } else {
          response.json().then((error) => console.log(error.error))
      }
    })
    .catch(error => console.log(error))
  }, [user, setWorkout]);
  
  return (
    <div id="profile">
      <h2>{user.name}'s Profile</h2>
      <h3>My Workout:</h3>
          {workout.map(workout => (
            <div key={workout.weight}>
              <h4>Exercise: {workout.exercise_id}</h4>
              <li>Name: {workout.exercise_name}</li>
              <li>Weight: {workout.weight}</li>
              <li>Sets: {workout.sets}</li>
              <li>Reps: {workout.reps}</li>
            </div>
          ))}
    </div>
  );
          
}
export default Profile;