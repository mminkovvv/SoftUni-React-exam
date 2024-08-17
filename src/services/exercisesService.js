import * as request from "../lib/requester";

const baseUrl = 'http://localhost:3030/data/exercises';

export const getAll = async () => {
    const result = request.get(baseUrl);

    return result;
};

export const create = async (exerciseData) => {
    const result = await request.post(baseUrl, exerciseData);

    return result;
};

export const getOne = async (exerciseId) => {
    const result = await request.get(`${baseUrl}/${exerciseId}`);

    return result;
};

export const deleteExercise = async (exerciseId) => {
    const result = await request.del(`${baseUrl}/${exerciseId}`);

    return result;
};

export const edit = async (exerciseId, exerciseData) => {
    const result = request.put(`${baseUrl}/${exerciseId}`, exerciseData);

    return result;
};

export const getExerciseByOwner = async (userId) => {
    const result = await request.get(baseUrl);
    const filteredResult = result.filter(x => x._ownerId === userId);

    return filteredResult;
};





