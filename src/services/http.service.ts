import axios, { AxiosResponse } from "axios";

const http = axios.create({
    headers: {
        "Content-type": "application/json"
    }
});

export {http};

export type { AxiosResponse };

