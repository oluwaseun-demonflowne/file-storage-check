"use client"
import { Skeleton } from '@components/ui/skeleton'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

interface Props {
    email : string  | undefined
}

const Dates = ({email}: Props) => {




    const { isLoading, data } = useQuery({ 
      queryKey: ['companyName'],
      queryFn: () =>
            axios
              .get(`/api/CompanyName/${email}`)
              .then((res) => res.data), 
      enabled: email !== null || undefined
    })

    


    if (isLoading) return <Skeleton className="w-[100px] h-2 bg-slate-300  rounded-sm" />



  return data &&<div>{data?.plan}: <span>
    {
      Math.floor((new Date(data?.freePlanExpirationDate).getTime() - new Date().getTime()) / (24 * 60 * 60 * 1000))
      // differenceInDays
    } days left</span>
    </div>
}

export default Dates