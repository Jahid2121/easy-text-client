import axios from "axios";


const axiosPublic = axios.create({
    baseURL: "http://localhost:5000"
})


const useAxiosPubic = () => {
    return axiosPublic;
};

export default useAxiosPubic;