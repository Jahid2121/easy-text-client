import { useQuery } from '@tanstack/react-query';
import useAxiosPubic from './useAxiosPublic';

const useChatRooms = () => {
    const axiosPublic = useAxiosPubic();
    const { data: rooms = [] } = useQuery({
        queryKey: ['rooms'],
        queryFn: async () => {
            const res = await axiosPublic.get("/api/chat")
            const data = await res.data;
            return data;
        }
    })
    return [rooms]
};

export default useChatRooms;