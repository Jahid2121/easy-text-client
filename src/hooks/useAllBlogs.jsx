"use client"
import { useQuery } from '@tanstack/react-query';
import useAxiosPubic from './useAxiosPublic';

const useAllBlogs = () => {
    const axiosPublic = useAxiosPubic();
    const { data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get("/blogs")
            const data = await res.data;
            return data;
        }
    })
    return [blogs]
};

export default useAllBlogs;