// const baseUrl = 'https://simpleats.azurewebsites.net/api/';
const baseUrl = 'http://localhost:4000/api/';

export class HttpService {

    constructor() { }

    static async httpGet(url: string, skipAuthorisation = false) {
        return await fetch(`${baseUrl}${url}`, {
            headers: this._getHeaders(skipAuthorisation)
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw Error(resp.statusText);
            }
        }).catch(err => {
            console.log(err);
        });
    }

    static async httpPost(url: string, body: object, skipAuthorisation = false) {
        const bodyAsString = JSON.stringify(body);
        return fetch(`${baseUrl}${url}`, {
            method: "POST",
            headers: this._getHeaders(skipAuthorisation),
            body: bodyAsString
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw Error(resp.statusText);
            }
        }).catch(err => {
            console.log(err);
        });
    }


    static async httpPut(url: string, body: object, skipAuthorisation = false) {
        const bodyAsString = JSON.stringify(body);
        return fetch(`${baseUrl}${url}`, {
            method: "PUT",
            headers: this._getHeaders(skipAuthorisation),
            body: bodyAsString
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw Error(resp.statusText);
            }
        }).catch(err => {
            console.log(err);
        });
    }


    static async httpDelete(url: string, body: object, skipAuthorisation = false) {
        const bodyAsString = JSON.stringify(body);
        return fetch(`${baseUrl}${url}`, {
            method: "DELETE",
            headers: this._getHeaders(skipAuthorisation),
            body: bodyAsString
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw Error(resp.statusText);
            }
        }).catch(err => {
            console.log(err);
        });
    }

    static _getHeaders(skipAuth = false) {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        if (skipAuth === false) {
            const token = localStorage.getItem('token');
            headers.append("Authorization", `bearer ${token}`); 
        }
        return headers;
    }
}






