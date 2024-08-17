import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import * as exerciseService from "../services/exercisesService";

export const ExerciseContext = createContext();

export const ExerciseProvider = ({ children }) => {
    const navigate = useNavigate();
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        exerciseService.getAll()
            .then((result) => setExercises(result))
            .catch((error) => console.log(error))
    });

    const addExerciseSubmit = async (values) => {

        if (values.imageUrl === '' ||
            values.name === '' ||
            values.workingMuscles === '' ||
            values.description === '') {
            return toast.error('All fields are required');
        }

        if (values.name.length < 4) {
            return toast.error('Name must be 4 characters long');
        }

        if (values.description.length < 20) {
            return toast.error('Description must be 20 characters long');
        }

        const newExercise = await exerciseService.create(values);

        try {
            setExercises(state => [...state, newExercise]);

            navigate('/exercises');
        } catch (error) {
            console.log(error);
        }
    };

    const onEditSubmit = async (values) => {

        if (values.imageUrl === '' ||
            values.name === '' ||
            values.workingMuscles === '' ||
            values.description === '') {
            return toast.error('All fields are required');
        }

        if (values.name.length < 4) {
            return toast.error('Name must be 4 characters long');
        }

        if (values.description.length < 20) {
            return toast.error('Description must be 20 characters long');
        }

        const result = await exerciseService.edit(values._id, values);

        try {
            setExercises(state => state.map(x => x._id === values._id ? result : x))

            navigate(`/exercises/${values._id}/details`);
        } catch (error) {
            console.log(error);
        }
    };

    const onDelete = (exerciseId) => {
        setExercises(state => state.filter(x => x._id !== exerciseId));
    };

    const contextValues = {
        addExerciseSubmit,
        onEditSubmit,
        onDelete,
    };

    return (
        <ExerciseContext.Provider value={contextValues}>
            {children}
        </ExerciseContext.Provider>
    );
};