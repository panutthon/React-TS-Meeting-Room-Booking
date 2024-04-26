import axios from "axios";

const http = axios.create({
    headers: {
        "Content-type": "application/json"
    }
});

export {http};

