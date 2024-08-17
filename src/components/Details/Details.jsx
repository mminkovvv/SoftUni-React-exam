import "./Details.css";

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import * as exerciseService from "../../services/exercisesService";
import { AuthContext } from "../../contexts/authContext";
import { ExerciseContext } from "../../contexts/exerciseContext";

export const Details = () => {
    const navigate = useNavigate();
    const [exercise, setExercise] = useState({});
    const { exerciseId } = useParams();
    const { userId } = useContext(AuthContext);
    const { onDelete } = useContext(ExerciseContext);


    useEffect(() => {
        exerciseService.getOne(exerciseId)
            .then((result) => {
                setExercise(result);
            })
    }, [exerciseId]);

    const isOwner = userId === exercise._ownerId;

    const onDeleteClick = async () => {
        const isConfirmed = confirm(`Are you sure you want to delete ${exercise.name}`);

        if (isConfirmed) {
            try {
                await exerciseService.deleteExercise(exerciseId);

                onDelete(exerciseId);

                navigate('/exercises');
            } catch (error) {
                console.log(error);
            }
        }
    };


    return (
        <div className="details">
            <div className="details-info">
                <div className="details-content">
                    <img src={exercise.imageUrl} />
                    <h1 id>{exercise.name}</h1>
                        <p className="muscles">
                            Working muscles: {exercise.workingMuscles}
                        </p>
                        <p className="description">
                            Description: {exercise.description}
                        </p>
                </div>
                
                    {isOwner && (
                        <div className="edit-delete-btns">
                                <Link to={`/exercises/${exerciseId}/edit`} className="edit-btn">
                                    Edit
                                </Link>
                                <button className="delete-btn" onClick={onDeleteClick}>
                                    Delete
                                </button>
                        </div>)} 
                </div>
            </div>
    );
};