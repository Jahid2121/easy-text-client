"use client";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";
import useAxiosPubic from "../hooks/useAxiosPublic";
import { redirect } from "next/navigation";

const UserData = ({ setName }) => {
  const [formData, setFormData] = useState({});

  const axiosPublic = useAxiosPubic();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    setName(name);
    localStorage.setItem('name', name);

    try {
      // await axiosPublic.post("/users", { name });
      await Swal.fire({
        title: "Success!",
        text: "You have been successfully registered.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="hero ">
      <div className="max-w-7xl mx-auto  md:flex justify-center">
        <div className="hidden md:block"></div>
        <div className="hero-content flex-col ">
          <div className=" rounded-none flex-shrink-0 w-full    ">
            <form
              onSubmit={handleSubmit}
              className="card-body w-80 md:w-[400px]  lg:w-[500px]"
            >
              <h1 className="text-5xl font-bold">User Data</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">
                    Enter Your Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleNameChange}
                  required={true}
                  className="input  input-bordered rounded-none"
                  value={formData.name}
                />
              </div>

              <div className="form-control ">
                <button className="btn hover:bg-green-800 text-white  bg-green-600 dark:text-white border-none rounded-none">
                  Submit
                </button>

                <div className="text-center">
                  {/* <h1 className="text-red-500">{error}</h1> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
