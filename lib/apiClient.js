import axios from "axios";

const TokenStorageName = "jwtToken";

function createAxiosOptions(token = undefined) {
    const options = {baseURL: this._apiEndpoint};

    if (token) {
        options.headers = {Authorization: `Bearer ${token}`};
    }

    return options;
}

class ApiClient {
    constructor(apiEndpoint) {
        this._apiEndpoint = apiEndpoint;

        const token = window.localStorage.getItem(TokenStorageName);

        this._axios = axios.create(createAxiosOptions(token));
    }

    async login(email, password) {
        window.localStorage.removeItem(TokenStorageName);
        this._axios = axios.create(createAxiosOptions());

        try {
            const response = await this._axios.post("/auth", {email, password});

            if (response.token) {
                window.localStorage.setItem(TokenStorageName, response.token);
                this._axios = axios.create(createAxiosOptions(response.token));
                return true;
            } else {
                return false;
            }
        } catch {
            return false;
        }
    }

    async me() {
        return await this._axios.get("/users/me");
    }
}

export default new ApiClient(process.env.API_ENDPOINT ?? "https://localhost:8080");