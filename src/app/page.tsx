import Image from "next/image";


export default function Home() {
  return (
   <div className="
   flex 
   min-h-full 
   flex-col 
   justify-center  
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
    Enter Your Data
    </h2>
    </div>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>


   </div>
  );
}
