"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useChatRooms from '../../hooks/useChatRooms';
import ChatRoomList from "../../components/ChatRoomList/ChatRoomList"
const ChatRoomPage = () => {
    const [chatRooms] = useChatRooms()
    const rooms = chatRooms.data 
    console.log(rooms);
    

    return (
        <div className='md:max-w-7xl max-w-xs  mx-auto p-6 bg-base-200 rounded-lg shadow-lg'>
            <h1 className='text-4xl font-bold text-center mb-6'>Chat Room Lists</h1>
           <ChatRoomList rooms={rooms} />
        </div>
    );
};

export default ChatRoomPage;
