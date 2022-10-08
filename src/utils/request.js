import axios from 'axios';

const request = axios.create({
    baseURL: 'https://recursive-hamic.herokuapp.com',
    headers: {
        'Content-type': 'application/json',
    },
});

export const get = async (path, option = []) => {
    const response = await request.get(path, option);
    return response.data;
};

export const post = async (path, data, config) => {
    const response = await request.post(path, data, config);
    return response.data;
};

export const put = async (path, data, config) => {
    const response = await request.put(path, data, config);
    return response.data;
};

export const deletee = async (path, option = []) => {
    const response = await request.delete(path, option);
    return response.data;
};
