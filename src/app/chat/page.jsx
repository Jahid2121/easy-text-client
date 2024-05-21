"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const ChatRoomPage = () => {
    const [chatRooms, setChatRooms] = useState([]);

    useEffect(() => {
        const fetchChatRooms = async () => {
            try {
                const response = await fetch('http://localhost:5000/rooms');
                const data = await response.json();
                setChatRooms(data.data);
            } catch (error) {
                console.error('Error fetching chat rooms:', error);
            }
        };

        fetchChatRooms();
    }, []);

    return (
        <div>
            <h1>Chat Room List Page</h1>
            <div>
                {chatRooms.length > 0 ? (
                    <ul>
                        {chatRooms.map(room => (
                            <li key={room.id}>
                                <Link href={`/chat/${room.id}`}>
                                   {room.name}
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
