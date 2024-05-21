"use client"

import React, { useState } from 'react';

const PostForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        onSubmit({title, content})
        console.log(title,content);
        setTitle('')
        setContent('')
    }
    return (
        <form className='mx-auto text-left' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input 
                type='text'
                id='title'
                value={title}
                className='border mx-9'
                onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="title">Content</label>
                <textarea 
                type='text'
                id='content'
                value={content}
                className='border mx-2'
                onChange={e => setContent(e.target.value)}
                />
            </div>
            <button className='bg-green-700 m-4 font-bold p-2 text-white' type='submit'>Submit</button>
            
        </form>
    );
};

export default PostForm;