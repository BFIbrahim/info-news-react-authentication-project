import React from 'react'
import { FaFacebook, FaGithub} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";



const SocialLogins = () => {
  return (
    <div>
        <h1 className='font-bold'>Login With</h1>
        <div>
            <button className='btn font-semibold bg-base-100 w-full border-amber-400 border-2 mt-5 text-amber-400 hover:bg-amber-400 hover:text-white'><FcGoogle/> Login With Google</button>
            <button className='btn font-semibold bg-base-100 w-full border-blue-400 border-2 mt-5 text-blue-400 hover:bg-blue-400 hover:text-white'><FaFacebook/> Login With Facebook</button>
            <button className='btn font-semibold bg-base-100 w-full border-black border-2 mt-5 text-black hover:bg-black hover:text-white'><FaGithub/> Login With gitHub</button>
        </div>
    </div>
  )
}

export default SocialLogins