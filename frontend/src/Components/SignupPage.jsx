import React, { useState } from "react";
import './SignupPage.css';
import { Link } from "react-router-dom";

function Signup() {
    const [signIn, setSignIn] = useState(true);

    const [name,setName]=useState("")
    const [usernmae,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [confirmpassword,setConfirmpassword]=useState("")

    return (
        <div className="Overall">
        <div class="max-w-md relative flex flex-col p-4 rounded-md text-black shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] w-[400px]">
        <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome to <span class="text-[#7747ff]">Car Rental</span></div>
        <div class="text-md font-normal mb-4 text-center text-[#1e0e4b]">Create your account</div>
        <form class="flex flex-col gap-3">

        <div class="block relative"> 
            <label for="Full Name" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Full Name</label>
            <input type="text" id="FullName" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"  onChange={(val)=>{setName(val.target.value)}}/>
            </div>

            <div class="block relative"> 
            <label for="UserName" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">User Name</label>
            <input type="text" id="UserName" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" onChange={(val)=>{setUsername(val.target.value)}}/>
            </div>

            <div class="block relative"> 
            <label for="password" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
            <input type="password" id="password" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" onChange={(val)=>{setPassword(val.target.value)}}/>
            </div>

            <div class="block relative"> 
            <label for="Confirmpassword" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Confirm Password</label>
            <input type="password" id="password" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" onChange={(val)=>{setConfirmpassword(val.target.value)}}/>
            </div>

            <button type="submit" class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Sign Up</button>

        </form>
        <div class="text-sm text-center mt-[1.6rem]">Already Having an Account? <Link class="text-sm text-[#7747ff]" to="/login">Login!</Link></div>
    </div>
    </div>
    );
}

export default Signup;