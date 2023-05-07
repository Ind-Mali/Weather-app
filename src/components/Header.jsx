import React from 'react'

import {BsGithub,BsLinkedin} from 'react-icons/bs'

const Header = () => {
  return (
    <div className='bg-black h-16 text-white w-full flex justify-between items-center '>
        <div className='font-extrabold text-2xl pl-7'>
            Weahter App
        </div>
        <div>
            <ul className='flex gap-5 mr-7'>
                
                <a href="https://github.com/Ind-Mali" target='_blank'  className='cursor-pointer' ><BsGithub size={25} /></a>
                <a href="https://www.linkedin.com/in/m-ali-yilmaz/" target='_blank'  className='cursor-pointer' ><BsLinkedin size={25} /></a>
            </ul>
        </div>
    </div>
  )
}

export default Header