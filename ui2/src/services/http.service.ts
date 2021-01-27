const baseUrl = 'https://simpleats.azurewebsites.net/api/';

export class HttpService {

    constructor() { }

    static async httpGet(url: string) {
        return await fetch(`${baseUrl}${url}`, {
            headers: { "Content-Type": "application/json" }
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw Error(resp.statusText);
            }
        });
    }

    static async httpPost(url: string, body: object) {
        const bodyAsString = JSON.stringify(body);
        return fetch(`${baseUrl}${url}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: bodyAsString
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw Error(resp.statusText);
            }
        });
    }


    static async httpPut(url: string, body: object) {
        const bodyAsString = JSON.stringify(body);
        return fetch(`${baseUrl}${url}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: bodyAsString
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw Error(resp.statusText);
            }
        });
    }


    static async httpDelete(url: string, body: object) {
        const bodyAsString = JSON.stringify(body);
        return fetch(`${baseUrl}${url}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: bodyAsString
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw Error(resp.statusText);
            }
        });
    }
}






