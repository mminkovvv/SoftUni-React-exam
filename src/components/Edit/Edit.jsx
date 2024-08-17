import './Edit.css';

import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

import * as exerciseService from "../../services/exercisesService";
import { UseForm } from "../../hooks/useForm";
import { ExerciseContext } from "../../contexts/exerciseContext";

export const Edit = () => {
    const { exerciseId } = useParams();
    const { onEditSubmit } = useContext(ExerciseContext);
    const { values, onChange, onSubmit, changeValues } = UseForm(onEditSubmit, {
        imageUrl: '',
        name: '',
        workingMuscles: '',
        description: '',
        likes: [],
    });

    useEffect(() => {
        exerciseService.getOne(exerciseId)
            .then(result => {
                changeValues(result);
            })
    }, [exerciseId]);

    return (
        <div className="edit">
            <div className="edit-box">
                <h1>Edit Exercise</h1>
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

                    <input type="submit" value="Edit" />
                </form>
            </div>
        </div>
    );
};