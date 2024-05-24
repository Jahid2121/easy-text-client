"use client"
import React from 'react';

const roomsDetailsPage = ({params}) => {

    const handleSendMessage = (message) => {
        console.log('Message sent');
    }
    
    
    return (
        <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Chat Room {params.id}</h1>
      
      <div className="mb-6">
        {/* {messages.length > 0 ? (
          <ul className="space-y-4">
            {messages.map((message, index) => (
              <li key={index} className="bg-base-100 p-4 rounded-lg">
                {message}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 text-lg">No messages yet.</p>
        )} */}

<ul className="space-y-4">
              <li className="bg-base-100 p-4 rounded-lg">
                Hi there
              </li>
              <li className="bg-base-100 p-4 rounded-lg">
                How are you doing ?
              </li>
              <li className="bg-base-100 p-4 rounded-lg">
                Hi there
              </li>
              <li className="bg-base-100 p-4 rounded-lg">
                Fine
              </li>
          </ul>
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

export default roomsDetailsPage;