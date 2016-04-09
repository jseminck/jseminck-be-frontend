const SERVER = 'http://localhost:1337';

export function get(url) {
    return fetch(`${SERVER}${url}`);
}

export function post(url, data) {
    return fetch(`${SERVER}${url}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}