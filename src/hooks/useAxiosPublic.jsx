import axios from "axios";


const axiosPublic = axios.create({
    baseURL: "https://easy-text-server-1.onrender.com"
})

//  https://easy-text-server-1.onrender.com
const useAxiosPubic = () => {
    return axiosPublic;
};

export default useAxiosPubic;