import ExerciseCard from "./ExerciseCard"

function ExercisesList ({ exercise, handleClick }) {

    const renderexercises = exercise.data.map(exercise => <ExerciseCard key={exercise.id} exercise={exercise} handleClick={handleClick} />)
    
    return (
        <div>{renderexercises}</div>
    )
}

export default ExercisesList;