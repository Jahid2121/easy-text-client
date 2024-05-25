import { useQuery } from '@tanstack/react-query';
import useAxiosPubic from './useAxiosPublic';

const useChatRooms = () => {
    const axiosPublic = useAxiosPubic();
    const { data: chatRooms = [] } = useQuery({
        queryKey: ['chatRooms'],
        queryFn: async () => {
            const res = await axiosPublic.get("/rooms")
            const data = await res.data;
            return data;
        }
    })
    return [chatRooms]
};

export default useChatRooms;