"use client"

import React, { useState } from 'react';
import useAxiosPubic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const PostForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const axiosPublic = useAxiosPubic()

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(title, content);
        try {
            await axiosPublic.post("/blogs", {title, description})
            await   Swal.fire({
                title: 'Success!',
                text: 'You have been successfully registered.',
                icon: 'success',
                confirmButtonText: 'OK',
              })
             
    
              
            
        } catch (error) {
            console.log(error.message);
        }

        setTitle('');
        setDescription('');
    };

    return (
        <form className="mx-auto text-left space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
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
    );
};

export default PostForm;
