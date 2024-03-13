import React, { useState } from "react";
import './SignupPage.css';
import { Link } from "react-router-dom";

function Details() {

    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [location,setLocation]=useState("")
    const [image,setImage]=useState("")

    return (
        <div className="Overall  w-[500px] ">
        <div class="max-w-md relative flex flex-col p-4 rounded-md text-black shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] w-[400px]">
        <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center"><span class="text-[#7747ff]">Enter Car Details</span></div>
        {/* /<div class="text-md font-normal mb-4 text-center text-[#1e0e4b]">Create your account</div> */}
        <form class="flex flex-col gap-3">

        <div class="block relative"> 
            <label for="Name" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Car Name</label>
            <input type="text" id="Name" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"  onChange={(val)=>{setName(val.target.value)}}/>
            </div>

            <div class="block relative"> 
            <label for="Price" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Price </label>
            <input type="text" id="Price" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" onChange={(val)=>{setPrice(val.target.value)}}/>
            </div>

            <div class="block relative"> 
            <label for="location" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Location</label>
            <input type="text" id="text" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" onChange={(val)=>{setLocation(val.target.value)}}/>
            </div>

            <div class="block relative">
            <label for="image" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Upload Car Image</label>
            <input type="text" id="image" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" onChange={(val) => {setImage(val.target.value)}} />
            </div>

            <button type="submit" class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Update</button>

        </form>
    </div>
    </div>
    );
}

export default Details;