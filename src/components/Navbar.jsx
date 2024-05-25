import React from 'react';
import Image from 'next/image';
import Link from "next/link";
const Navbar = () => {
    return (
        <div>
             <div className="
    flex justify-between items-center
   py-1
   sm:px-6 
   bg-gray-100
   ">

    <div className='flex my-4'>
   <Image
    alt="logo"
    width="48"
    height="48"
    className=""
    src="/images/chat.png"
    />
    <h2 className="
  
    
    text-3xl 
    font-bold
    tracking-tight
    ">
    Easy Text
    </h2>
   </div>
   <div >
   <Link href="/" ><button className="btn  mr-5 text-white btn-success">Home</button></Link>
   <Link href="/create" ><button className="btn mr-5 text-white btn-success">Create Post</button></Link>

<Link href="chat" ><button className="btn  mr-5 text-white btn-success">Chat Lists</button></Link>

<Link href="/createroom" ><button className="btn  mr-5 text-white btn-success">Create Room</button></Link>
   </div>
   


   </div>
        </div>
    );
};

export default Navbar;