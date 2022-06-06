import {useState, useContext} from "react"
import {useHistory} from "react-router-dom"
import { UserContext } from "../context/user";
import { MessageContext } from "../context/message";

const ExerciseForm = ({ workout, setWorkout, exercise }) => {
    const {user} = useContext(UserContext)
    const {setMessage} = useContext(MessageContext);
    const [exerciseNew, setExerciseNew] = useState({
        id: "",
        sets: "", 
        reps: "",
        weight: ""
    });
    console.log(user)
    console.log(user.workout)
    // debugger
    const history = useHistory()
    const select = document.getElementById('select');

    function handleChange(e) {
        console.log(e.target.value)
        console.log(exercise)
        // console.log(select.selectedIndex);
        // console.log(select.options[select.selectedIndex].value);
        // console.log(select.options.target.value);

        setExerciseNew({
            ...exerciseNew,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("clicked")
        if ([exerciseNew.sets, exerciseNew.reps, exerciseNew.weight].some(val => val.trim() === "")) {
            alert("You must fill in all the information please!")
        }

        const newExercise = {
            // id: parseInt(select.options[select.selectedIndex].value),
            id: parseInt(exerciseNew.id),
            sets: parseInt(exerciseNew.sets),
            reps: parseInt(exerciseNew.reps),
            weight: parseInt(exerciseNew.weight)
        }
console.log(newExercise)

        fetch("/workout", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newExercise)
        })
        setWorkout(...workout, newExercise)
        setMessage({message: "Workout updated successful.", color: "green"})
        // .then(() => history.push("/profile"))
        history.push("/profile")
    }
    // debugger
    return (
        <div>
            <h3>Log Your Exercise</h3> 
            <form onSubmit={handleSubmit}>
                {/* <select id="select" onChange={handleChange}>
                    <option key={Math.random()} >Select an exercise</option>
                    {user.workout.map((option) => (
                        <option key={Math.random()} value={option.id}>{(option.id === option.exercise_id).exercise_id}</option>
                    ))}
                 </select> */}
                 <select type="number" name="id" onChange={handleChange}>
                    {user.workout.map((option) => (
                        <option key={Math.random()} value={option.exercise_id}>{option.exercise_id}</option>
                    ))}
                 </select>
                 <br></br>
                <label htmlFor="sets">Sets</label>
                <input onChange={handleChange} type="number" name="sets" value={exerciseNew.sets} required/><br />
                <label htmlFor="reps">Reps</label>
                <input onChange={handleChange} type="number" name="reps" value={exerciseNew.reps} required/><br />
                <label htmlFor="weight">Weight</label>
                <input onChange={handleChange} type="number" name="weight" value={exerciseNew.weight} required/><br />
                <input type="submit" value="Log to your Journal" />
            </form>
        </div>
    )
}

export default ExerciseForm;