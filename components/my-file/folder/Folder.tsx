"use client"
import { folder } from '@utils/folders'
import React, { useState } from 'react'
import { AiFillFolder } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'



const Folder = () => {
   const [showDot, setShowDot] = useState(false) 
   const [getPostId, setGetPostId] = useState<number | null>(null)
   const getBoxId = (id: number) => {
        console.log(id)
        setGetPostId(id)
        setShowDot(!showDot)
   }
  return (
    <div className='flex flex-wrap gap-5'>
        {/* ROW VIEW */}
        {folder.map((i) => (
            <div key={i.id} className='border relative rounded-md flex flex-col justify-between  h-36 w-36'>
                <div className={`${showDot ? getPostId == i.id ? 'flex' : 'hidden' : 'hidden'} bg-white z-30 border rounded-md absolute left-0 top-10 w-44 flex-col gap-1`}>
                    <div className='py-2 px-5 border-b'>
                        <span className='text-xs font-semibold text-slate-700'>Preview</span>
                    </div>
                    <div className='flex py-2 px-5 flex-col gap-3 border-b'>
                        <span className='text-xs font-semibold text-slate-700'>Share</span>
                        <span className='text-xs font-semibold text-slate-700'>Rename</span>
                        <span className='text-xs font-semibold text-slate-700'>Save to important</span>
                    </div>
                    <div className='gap-3 py-2 px-5 flex flex-col border-b'>
                        <span className='text-xs font-semibold text-slate-700'>View details</span>
                        <span className='text-xs font-semibold text-slate-700'>Make a copy</span>
                        <span className='text-xs font-semibold text-slate-700'>download</span>
                    </div>
                    <div className='py-2 px-5'>
                        <span className='text-xs font-semibold text-slate-700'>Delete</span>
                    </div>
                </div>
                <div className='p-3 flex flex-col h-full justify-between'>
                    <div className='flex justify-between'>
                        <AiFillFolder className='text-[#b896f7]' />
                        <BsThreeDotsVertical onClick={() => {getBoxId(i.id)}} className='cursor-pointer'/>
                    </div>
                    <div>
                        <h1 className='text-xs font-bold'>{i.title}</h1>
                        <p className='text-xs text-slate-500'>{i.noOfFiles} files</p>
                    </div>
                </div>    
                <div className='p-3 rounded-b-md bg-blue-300'>
                    <p className='text-xs text-slate-800'>{i.id} MB</p>
                </div>
            </div>        
        ))}
        
        <div></div>
        <div></div>
    </div>
  )
}

export default Folder