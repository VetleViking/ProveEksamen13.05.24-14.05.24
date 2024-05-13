import { SocialIcon } from 'react-social-icons'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
export function Header() {
    return (
        <>
            <Link to="/"><img src={logo} className="absolute top-9 left-60 h-12 inline-block" alt="logo" /></Link>
            <div className='text-gray-400 text-center flex justify-center space-x-9 pt-10'>
                <h1 className='hover:text-[#2596be] transition-colors duration-200 cursor-pointer'>
                <Link to="/ansatte">Ansatte</Link>
                </h1>
                <h1 className='hover:text-[#2596be] transition-colors duration-200 cursor-pointer'>
                <Link to="/lokasjon">Lokasjon</Link>
                </h1>
                <h1 className='hover:text-[#2596be] transition-colors duration-200 cursor-pointer'>
                <Link to="/">Hjem</Link>
                </h1>
                <h1 className='hover:text-[#2596be] transition-colors duration-200 cursor-pointer'>Industries</h1>
                <h1 className='hover:text-[#2596be] transition-colors duration-200 cursor-pointer'>Industries</h1>
            </div>
            <div className='justify-center flex space-x-9 pt-10 absolute right-10 top-0'>
                <SocialIcon className="border-[#2596be] border rounded-full" bgColor='none' fgColor='#2596be' url="www.twitter.com" />
                <SocialIcon className="border-[#2596be] border rounded-full" bgColor='none' fgColor='#2596be' url="www.instagram.com" />
                <SocialIcon className="border-[#2596be] border rounded-full" bgColor='none' fgColor='#2596be' url="www.facebook.com" />
                <SocialIcon className="border-[#2596be] border rounded-full" bgColor='none' fgColor='#2596be' url="www.linkedin.com" />
            </div>
        </>
    )
}