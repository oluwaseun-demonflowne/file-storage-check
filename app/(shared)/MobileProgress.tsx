"use client"
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Skeleton } from '@components/ui/skeleton'

type Props = {
    email : String | undefined
}

const MobileProgress = ({email}:Props) => {

    const { isLoading } = useQuery({ queryKey: ['companyName'],
    queryFn: () =>
          axios
            .get(`/api/CompanyName/${email}`)
            .then((res) => res.data), 
            enabled: email !== null || undefined
    })  

    if(isLoading) return <Skeleton className="w-[100px] hidden md:block h-2 bg-slate-300  rounded-sm" /> 


  return (
    <div></div>

  )
}

export default MobileProgress




