'use client'

import CustomTextField from "@/components/custom-textfield";
import Link from "next/link";
import { useState } from "react";
import { signIn } from 'next-auth/react';
import { FaUnlockKeyhole, FaRegCircleUser } from "react-icons/fa6";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        try{
          e.preventDefault();
    
        const result = await signIn('credentials', {
          redirect: false,
          email,
          password,
        });
    
        if (result.error) {
          console.log(`Error: ${result.error}`);
          
        } else {
          window.location.href = '/panel/history'; // Redirect to the homepage or dashboard
        }
        }
        catch(e){
          console.log(`catch called: ${e}`);
          
        }
      };
    

    return (
        <div className="p-10 min-h-screen">
            
            <h1 className="flex flex-wrap font-bold text-start text-4xl">
            <span className="block text-[#84c4eb]">Gramatic</span>
            <span className="block text-white">Welcome Back to </span>
            
            </h1>
            <h2 className="text-2xl font-medium pt-4 pb-4">
                با ایمیل خود، وارد حساب کاربریتان شوید.
            </h2>
            <CustomTextField value={email} set={handleEmailChange} hint={"ایمیل"} child={<FaRegCircleUser />}/>
            <CustomTextField value={password} set={handlePasswordChange} hint={"رمز عبور"} child={<FaUnlockKeyhole />}/>
      <button onClick={handleSubmit} className="bg-[#84c4eb] w-full p-2 rounded-xl">
        مرحله بعد
      </button>
      <div className="text-[#84c4eb] flex-col pt-10 flex justify-center items-center w-full">
      <Link href={'/'} className="hover:text-white transition-all duration-500" >
      رمز عبور خود را فراموش کرده‌اید؟
      </Link>
      <Link href={'/'} className="hover:text-white transition-all duration-500 pt-2">
      حساب کاربری ندارید؟ همین حالا ثبت نام کنید
      </Link>
      </div>
        </div>
    );
}

export default LoginPage;