const baseUrl = 'http://localhost:4000/api/';

export class httpservice {

    constructor() { }

    static async httpGet(url: string) {
        return await fetch(`${baseUrl}${url}`, {
            headers: { "Content-Type": "application/json" }
        }).then(o => o.json());
    }
}




// async function httpPost(url, body) {
//     const bodyAsString = JSON.stringify(body);
//     return fetch(`${baseUrl}${url}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: bodyAsString
//     }).then(o => o.json());
// }


// async function httpPut(url, body) {
//     const bodyAsString = JSON.stringify(body);
//     return fetch(`${baseUrl}${url}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: bodyAsString
//     }).then(o => o.json());
// }

// async function httpDelete(url, body) {
//     const bodyAsString = JSON.stringify(body);
//     return fetch(`${baseUrl}${url}`, {
//         method: "DELETE",
//         headers: { "Content-Type": "application/json" },
//         body: bodyAsString
//     }).then(o => o.json());
// }

