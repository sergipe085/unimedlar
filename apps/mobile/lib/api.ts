import axios from "axios";

const axiosConfig = {
    baseURL: "https://www.unimedlar.com.br/api"    
};

const api = axios.create(axiosConfig)

api.interceptors.response.use((response) => {
        // if (response.data.message) {
        //     toast.success(response.data.message, {
        //         autoClose: 5000
        //     })
        // }

        return response
    }, (error) => {
        if (error.response.data.message) {
            console.log(error.response.data);
        }

        console.log(error.response.data);
        
    throw error
});

export { api };