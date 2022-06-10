import { useState, useContext } from "react"
import ExercisesList from "../components/ExercisesList"
import { UserContext } from "../context/user"

function ExercisesContainer({ exercise }) {
    const {user, workout, setWorkout} = useContext(UserContext);
    
    const [addToWorkout, setAddToWorkout] = useState({
            user_id: "",
            exercise_id: ""
        })
        
    function handleClick(e) {
        e.preventDefault();
        setAddToWorkout({
            ...addToWorkout,
            [e.target.name]: e.target.value
        })

        const individualExercise = (e.target.value);
        if (!workout.includes(individualExercise))
            setWorkout([...workout, individualExercise]);

        fetch("/workouts", {
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
