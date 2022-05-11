import {useState, useContext} from "react"
import {useHistory} from "react-router-dom"
import { UserContext } from "../context/user";

const ExerciseForm = ({ workout }) => {
    const {user} = useContext(UserContext)
    const [exercise, setExercise] = useState({
        id: "",
        // exercise_name: "",
        sets: "", 
        reps: "",
        weight: ""
    });

    const history = useHistory()

    function handleChange(e) {
        console.log(e.target.value)
        setExercise({
            ...exercise,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("clicked")
        if ([exercise.id, exercise.sets, exercise.reps, exercise.weight].some(val => val.trim() === "")) {
            alert("You must fill in all the information please!")
        }

        const newExercise = {
            id: exercise.id,
            sets: exercise.sets,
            reps: exercise.reps,
            weight: exercise.weight,
            user_id: user.id.toString()
        }
console.log(newExercise)

        fetch(`http://127.0.0.1:9393/workouts/${exercise.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newExercise)
        })
        .then(() => history.push("/profile"))
        
    }
    return (
        <div >
            <h3>Log Your Exercise</h3> 
            <form onSubmit={handleSubmit}>
                <select name="id" onChange={handleChange}>
                    {workout.map((option) => (
                        <option value={option.id}>{option.exercise_name}</option>
                    ))}
                 </select>
                <label htmlFor="sets">Sets</label>
                <input onChange={handleChange} type="number" name="sets" value={exercise.sets} required/><br />
                <label htmlFor="reps">Reps</label>
                <input onChange={handleChange} type="number" name="reps" value={exercise.reps} required/><br />
                <label htmlFor="weight">Weight</label>
                <input onChange={handleChange} type="number" name="weight" value={exercise.weight} required/><br />
                <input type="submit" value="Log to your Journal" />
            </form>
        </div>
    )
}

export default ExerciseForm;