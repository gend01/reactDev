import { BASE_URL, API_KEY } from "../system/api.config";

class Request {
    constructor(path) {
        this.url = `${BASE_URL}`;
        this.method = "GET";
        this.body = null;
    }

    setMethod(method) {
        this.method = method;
        return this;
    }
    setBody(body) {
        this.body = JSON.stringify(body);
        return this;
    }
    setParams(params) {
        return this;
    }

    send() {
        const options = {};

        options.method = this.method;

        if (this.body) {
            options.body = this.body;
        }

        // this.url += `?api_key=${API_KEY}`;

        return fetch(this.url).then((response) => response.json());
    }
}

export default Request;
