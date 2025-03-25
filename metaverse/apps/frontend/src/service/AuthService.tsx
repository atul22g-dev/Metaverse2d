import axios from "axios";

export default class AuthService {
    private baseUrl: string = import.meta.env.VITE_BACKEND_URL;
    static signup: (params: { userName: string; password: string }) => Promise<{ userId: string }>;
    static signin: (params: { userName: string; password: string }) => Promise<{ userId: string }>;


    async signup(userName: string, password: string) {

        const response = await axios.post(`${this.baseUrl}/api/v1/signup`, {
            username: userName,
            password,
            type: "user"
        });

        return response.data.userId
    }

    async signin(userName: string, password: string) {
        const response = await axios.post(`${this.baseUrl}/api/v1/signin`, {
            username: userName,
            password
        });
        console.log(response);
        
        return response.data.token;
    }
}