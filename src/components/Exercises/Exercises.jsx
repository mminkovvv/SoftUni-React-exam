import "./Exercises.css";

import { useEffect, useState } from "react";

import { ExerciseCard } from "./ExerciseCard/ExerciseCard";
import * as exercisesService from "../../services/exercisesService";

export const Exercises = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        exercisesService.getAll()
            .then((result) => setExercises(result))
            .catch((error) => console.log(error))
    }, []);

    return (
        <div className="exercises">
                <h1>Exercises</h1>
                <div className="exercises-list">
                    {exercises.map(exercise => (
                        <ExerciseCard key={exercise._id} {...exercise} />
                    ))}
                    

                    {exercises.length === 0 && (
                        <div className="no-exercises">
                            <p>There are no added exercises yet!</p>
                        </div>)}
                </div>
        </div>
    );
};