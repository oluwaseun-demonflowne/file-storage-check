"use client"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Progress as Pro } from '@components/ui/progress'
import { Skeleton } from '@components/ui/skeleton'

type Props = {
    email: String | undefined
}

const Progress = ({email}: Props) => {

    const { isLoading,data } = useQuery({ queryKey: ['companyName'],
    queryFn: () =>
          axios
            .get(`/api/CompanyName/${email}`)
            .then((res) => res.data), 
            enabled: email !== null || undefined
    })  

    if(isLoading) return <Skeleton className="w-[100px] hidden md:block h-2 bg-slate-300  rounded-sm" />


  return ( data &&
    <>
      <div className='theNav md:hidden'>
        <Pro max={data?.maxSize} value={data?.currentSize} className="w-[100%] h-1" />
        <p className='text-sm mt-2 font-bold'><span className=' font-normal'>{data ? Math.floor(data?.currentSize) : null}</span>mb/{data?.maxSize}mb</p>
      </div>
      <div className='hidden md:block'>
        <Pro max={data?.maxSize} value={data?.currentSize} className="w-[100%] h-1" />
        <p className='text-sm mt-2 font-bold'><span className=' font-normal'>{data ? Math.floor(data?.currentSize) : null}</span>mb/{data?.maxSize}mb</p>
      </div>
    </>
    
  )
}

export default Progress