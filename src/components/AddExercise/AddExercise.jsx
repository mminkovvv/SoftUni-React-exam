import "./AddExercise.css";

import { useContext } from "react";

import { UseForm } from "../../hooks/useForm.js";
import { ExerciseContext } from "../../contexts/exerciseContext.jsx";

export const AddExercise = () => {
    const { addExerciseSubmit } = useContext(ExerciseContext);
    const { values, onChange, onSubmit } = UseForm(addExerciseSubmit, {
        imageUrl: '',
        name: '',
        workingMuscles: '',
        description: '',
        likes: [],
    });

    return (
        <div className="create">
            <div className="create-box">
                <h1>Add Exercise</h1>
                <form onSubmit={onSubmit}>
                    <label>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={onChange} />

                    <label>Image:</label>
                    <input
                        type="text"
                        id="image"
                        name="imageUrl"
                        placeholder="http://..."
                        value={values.imageUrl}
                        onChange={onChange} />

                    <label>Working Muscles:</label>
                    <input
                        type="text"
                        id="muscles"
                        name="workingMuscles"
                        value={values.workingMuscles}
                        onChange={onChange} />

                    <label>Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={values.description}
                        onChange={onChange} />

                    <input type="submit" defaultValue="Create" />
                </form>
            </div>
        </div>
    );
};