import "./ExerciseCard.css";

import { Link } from "react-router-dom";

export const ExerciseCard = ({
    imageUrl,
    name,
    workingMuscles,
    _id,
}) => {

    return (
        <div className="exercise">
            <div className="exercise-info">
                <img src={imageUrl} />
                <h2>{name}</h2>
                <p>
                    Working Muscles: {workingMuscles}
                </p>
                <Link to={`${_id}/details`} className="btn-details">
                    Details
                </Link>
            </div>
        </div>
    );
};
