import React, { useState } from "react";
import './LoginPage.css';
import { Link } from "react-router-dom";
import axios from "axios"
import { Navigate } from "react-router-dom";

function Login() {
    const [signIn, setSignIn] = useState(true);

    const [Name,setUsername]=useState("")
    const [Password,setPassword]=useState("")
    // const]

    const apiUrl = import.meta.env.REACT_APP_BACK_END;
    console.log(apiUrl)
    const [isLogedIn, setIsLogedIn] = useState(false);

    const handleSubmit = async(e) =>{
        
        // e.preventDefault();
        // console.log("username", Name);
        // console.log("pass", Password);
        const response = await axios.post(
            'http://localhost:5000/users/login',
            {Name, Password}
        )
        console.log(response.data.message.token);
        document.cookie = `${response.data.message.token}`
        console.log(response.status);
        if(response.status == 200){
            setIsLogedIn(true);
        }
    }

    return (
        <div className="Overall">
            {
                (isLogedIn == true)?<Navigate to="/" />:""
            }
        <div class="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] w-[400px]">
        <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span class="text-[#7747ff]">Car Rental</span></div>
        <div class="text-md font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>
        <div class="flex flex-col gap-3">
            <div class="block relative"> 
            <label for="UserName" class=" text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">User Name</label>
            <input type="text" id="UserName" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" onChange={(val)=>{setUsername(val.target.value)}}/>
            </div>

            <div class="block relative"> 
            <label for="password" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
            <input type="password" id="password" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" onChange={(val)=>{setPassword(val.target.value)}}/>
            </div>

            <div>
            <a class="text-sm text-[#7747ff]" href="#">Forgot your password?
            </a></div>
            <button type="submit" class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
                onClick={()=>handleSubmit()}
            >LogIn</button>

        </div>
        <div class="text-sm text-center mt-[1.6rem]">Not having an account? <Link class="text-sm text-[#7747ff]" to="/signup">Sign up!</Link></div>
    </div>
    </div>
    );
}

export default Login;
