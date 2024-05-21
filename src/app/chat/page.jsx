"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useChatRooms from '@/hooks/UseChatRooms';

const ChatRoomPage = () => {
    const [rooms] = useChatRooms()
    const chatRooms = rooms.data
    console.log(chatRooms);
    

    return (
        <div>
            <h1>Chat Room List Page</h1>
            <div>
                {chatRooms?.length > 0 ? (
                    <ul>
                        {chatRooms.map(room => (
                            <li key={room?.id}>
                                <Link href={`/chat/${room?.id}`}>
                                   {room?.name}
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
