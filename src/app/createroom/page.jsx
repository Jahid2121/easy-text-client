"use client"

import React, { useState } from 'react';
import useAxiosPubic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const CreateRoomPage = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const axiosPublic = useAxiosPubic()

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(name, description);
        try {
            await axiosPublic.post("/rooms", {name, description})
            await   Swal.fire({
                title: 'Success!',
                text: 'You have been successfully Create new room.',
                icon: 'success',
                confirmButtonText: 'OK',
              })
             
    
              
            
        } catch (error) {
            console.log(error.message);
        }

        setName('');
        setDescription('');
    };

    return (

        <div className="
        flex 
        min-h-screen 
        flex-col 
        justify-center 
        items-center 
        py-12 
        bg-gray-100
    ">
        <div className="w-full max-w-md px-6">
            <h2 className="
                mt-6 
                text-center 
                text-4xl 
                font-extrabold 
                text-gray-900
            ">
                Create New Room
            </h2>

        </div>
        <div className="
            mt-8 
            w-full 
            max-w-md 
            bg-white 
            p-8 
            rounded-lg 
            shadow-md
        ">
              <form className="mx-auto text-left space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Room Name</label>
                <input
                    type="text"
                    id="title"
                    value={name}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">Short description</label>
                <textarea
                    id="content"
                    value={description}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Submit
                </button>
            </div>
        </form>
        </div>
    </div>
      
    );
};

export default CreateRoomPage;
