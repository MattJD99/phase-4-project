import { useState, useContext } from "react"
import ExercisesList from "../components/ExercisesList"
import { UserContext } from "../context/user"

function ExercisesContainer({ workout, setWorkout, exercise }) {
    const {user} = useContext(UserContext);
    
    const [addToWorkout, setAddToWorkout] = useState({
            name: "",
            exercise_id: ""
        })
        
    function handleClick(event) {
        event.preventDefault();
        setAddToWorkout({
            ...addToWorkout,
            name: user,
            exercise_id: parseInt(event.target.id)
        })

        const individualExercise = parseInt(event.target.id);
        if (!workout.includes(individualExercise))
            setWorkout([...workout, individualExercise]);

        fetch("http://localhost:9393/workouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addToWorkout),
        });

        console.log(addToWorkout);
        console.log(user)
    }


    return (
        <>
            <h2>Our Exercises!!!!</h2>
            <ExercisesList exercise={exercise} handleClick={handleClick} />
        </>
    );
}

export default ExercisesContainer;
