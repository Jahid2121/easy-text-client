"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useChatRooms from '../../hooks/useChatRooms';

const ChatRoomPage = () => {
    const [rooms] = useChatRooms()
    console.log(rooms);
    

    return (
        <div>
            <h1>Chat Room List Page</h1>
            <div>
                {rooms?.length > 0 ? (
                    <ul>
                        {rooms.map(room => (
                            <li key={room?.id}>
                                <Link href={`/chat/${room?.id}`}>
                                   {room?.chatName}
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
