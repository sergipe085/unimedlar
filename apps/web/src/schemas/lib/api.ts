import axios from "axios";
// import { toast } from "react-toastify";

const axiosConfig = {
    baseURL: process.env.NEXT_PUBLIC_API_URL
};

const api = axios.create(axiosConfig)

api.interceptors.response.use((response) => {
        if (response.data.message) {
            // toast.success(response.data.message, {
            //     autoClose: 5000
            // })
        }

        return response
    }, (error) => {
        if (error.response.data.message) {
            // toast.error(error.response.data.message, {
            //     autoClose: 5000
            // })
        }
    throw error
});

export { api };
