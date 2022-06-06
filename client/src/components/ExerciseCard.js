import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/user";
import YoutubeEmbed from "./YoutubeEmbed";

function ExerciseCard({ exercise }) {
    const {user} = useContext(UserContext)
    const [workoutObj, setWorkoutObj] = useState({
      user_id: "",
      exercise_id: "",
      // exercise_name: null
    })

    function handleClick(e) {
      e.preventDefault()
      setWorkoutObj({
        user_id: user.id,
        exercise_id: e.target.value,
        // exercise_name: exercise.exercise_name
        // [e.target.name]: e.target.value
      });
      console.log(workoutObj)

      if (workoutObj.exercise_id !== "")
      fetch("/workout", {
        method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(workoutObj),
            })
            .then((response) => response.json())
    }
            

    if (!exercise) return <h1>Loading...</h1>
  return (
    <div>
        <h3>Name: <Link to={`/exercises/${exercise.id}`}>{exercise.exercise_name}</Link></h3>
        <h4>description: {exercise.description}</h4>
        {user ? <form onClick={handleClick}>
                  <button key={exercise.exercise_name} id={exercise.id} value={exercise.id}>Add to your Workout</button>
                </form> : null}
        <h4>Video: <YoutubeEmbed embedId={exercise.video_link}/> </h4>
    </div>
  )
}

export default ExerciseCard;