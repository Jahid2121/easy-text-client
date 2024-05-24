"use client"
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPubic from '../../../hooks/useAxiosPublic';

const RoomsDetailsPage = ({params}) => {
  const axiosPublic = useAxiosPubic()
  const id = params.id
console.log(id);

  
  

  const {
    data: messages = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["messages", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/rooms/${id}/messages`);
      return res.data.data;
      // console.log(res.data);
    },
  });

  if (isLoading) {
    return <div className="w-1/2 flex mx-auto loading "></div>
  }
  if (isError) {
    console.log(error);
  }

    const handleSendMessage = (message) => {
        console.log('Message sent');
    }
    
    
    return (
        <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Chat Room</h1>
      
      <div className="mb-6">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-base-100 p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{msg.messagesender}</span>
              <span className="text-sm text-gray-500">
                {new Date(msg.created_at).toLocaleString()}
              </span>
            </div>
            <div className="text-base">{msg.content}</div>
          </div>
        ))}
      </div>
      
      <div className="flex space-x-4">
        <input
          type="text"
          className="flex-grow input input-bordered"
          placeholder="Type your message here..."

        />
        <button className="btn bg-green-500 hover:bg-green-700" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
        );
    };

export default RoomsDetailsPage;