import { useState } from "react";

export const UseForm = (submitHandler, initialValues) => {
    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(values);

        changeValues(initialValues);
    };

    const changeValues = (newValues) => {
        setValues(newValues);
    };

    return {
        values,
        onChange,
        onSubmit,
        changeValues,
    };
};