import PostForm from '../../components/PostForm/PostForm';
import React from 'react';

const CreatePostPage = () => {

    
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
                    Create Post
                </h2>
                <p className="
                    mt-2 
                    text-center 
                    text-sm 
                    text-gray-600
                ">
                    Share your thoughts with the world!
                </p>
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
                <PostForm />
            </div>
        </div>
    );
};

export default CreatePostPage;
