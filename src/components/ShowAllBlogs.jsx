"use client"
import React from 'react';
import useAllBlogs from '../hooks/useAllBlogs';

const ShowAllBlogs = () => {
    const [blogs] = useAllBlogs();
    const allBlogs = blogs.data;

    return (
        <div className="container mx-auto px-4">
            <h2 className='text-3xl font-bold my-10 text-center'>Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allBlogs?.map(blog => (
                    <div key={blog.id} className="border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out">
                        <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                        <p className="text-gray-600">{blog.description.substring(0, 100)}...</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowAllBlogs;
