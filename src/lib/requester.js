export const request = async (method, url, data) => {
    const options = {};

    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options.headers = {
            'Content-Type': 'application/json'
        }

        options.body = JSON.stringify(data);
    }

    const token = localStorage.getItem('accessToken');

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        };
    }

    const response = await fetch(url, options);

    if (response.status === 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;

};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
