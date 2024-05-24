import React from 'react';
import Image from 'next/image';
import Link from "next/link";
const Navbar = () => {
    return (
        <div>
             <div className="
   flex 
   min-h-full 
   flex-col 
   py-12
   sm:px-6 
   lg:px-8
   bg-gray-100
   ">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <Image
    alt="logo"
    width="48"
    height="48"
    className="mx-auto w-auto"
    src="/images/chat.png"
    />
    <h2 className="
    mt-6 
    text-center
    text-3xl 
    font-bold
    tracking-tight
    ">
    Easy Text
    </h2>
    </div>

    

    <Link href="chat" ><button className="btn text-white btn-success">Chat Lists</button></Link>
   </div>
        </div>
    );
};

export default Navbar;