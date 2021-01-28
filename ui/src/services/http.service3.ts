const baseUrl = 'http://localhost:4000/api/';

export class HttpService {

    constructor() { }

    static async httpGet(url: string) {
        return await fetch(`${baseUrl}${url}`, {
            headers: { "Content-Type": "application/json" }
        }).then(o => o.json());
    }

    static async httpPost(url: string, body: object) {
        const bodyAsString = JSON.stringify(body);
        return fetch(`${baseUrl}${url}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: bodyAsString
        }).then(o => o.json());
    }


    static async httpPut(url: string, body: object) {
        const bodyAsString = JSON.stringify(body);
        return fetch(`${baseUrl}${url}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: bodyAsString
        }).then(o => o.json());
    }

    
    static async httpDelete(url: string, body: object) {
        const bodyAsString = JSON.stringify(body);
        return fetch(`${baseUrl}${url}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: bodyAsString
        }).then(o => o.json());
    }
}






