"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useChatRooms from '../../hooks/useChatRooms';

const ChatRoomPage = () => {
    const [chatRooms] = useChatRooms()
    const rooms = chatRooms.data 
    console.log(rooms);
    

    return (
        <div className='md:max-w-7xl max-w-xs  mx-auto p-6 bg-base-200 rounded-lg shadow-lg'>
            <h1 className='text-4xl font-bold text-center mb-6'>Chat Room Lists</h1>
            <div>
                {rooms?.length > 0 ? (
                    <ul className='space-y-4'>
                        {rooms.map(room => (
                            <li key={room?.id} className='bg-base-100 p-4 rounded-lg hover:bg-green-500 hover:text-white transition'>
                                <Link  href={`/chat/${room?.id}`}>
                                   <h2 className="text-lg text-blue-500 hover:text-white">
                                   {room?.name}
                                   </h2>
                                   <p>{room?.description}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No chat rooms available.</p>
                )}
            </div>
        </div>
    );
};

export default ChatRoomPage;
