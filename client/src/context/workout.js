import React, { useState } from 'react';

const WorkoutContext = React.createContext();

function WorkoutProvider({ children }) {
    const [workout, setWorkout] = useState(null);

    return (
        <WorkoutContext.Provider value={{ workout, setWorkout }}>
            {children}
        </WorkoutContext.Provider>
    )
}

export { WorkoutContext, WorkoutProvider };