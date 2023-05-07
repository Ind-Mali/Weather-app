import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black h-[63px] text-white flex '>
        <div  className='flex justify-between items-center gap-5 pl-7' >
            <p className='font-bold text-2xl text-white'>
                <a href='https://github.com/Ind-Mali' target='_blank' rel='noreferrer'>Github</a>
            </p>
            <p className='font-bold text-2xl text-white'>
                <a href='https://www.linkedin.com/in/m-ali-yilmaz/' target='_blank' rel='noreferrer'>Linkedin</a>
            </p>
        </div>
            <div className='font-bold flex flex-auto justify-end items-center pr-7' >Mehmet Ali YILMAZ</div>
    </div>
  )
}

export default Footer