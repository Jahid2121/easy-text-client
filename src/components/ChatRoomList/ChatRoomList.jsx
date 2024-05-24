import Link from 'next/link';
import React from 'react';

const ChatRoomList = ({rooms, userName}) => {
    return (
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
    );
};

export default ChatRoomList;