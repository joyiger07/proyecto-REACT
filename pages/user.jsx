import useAuth from '@/components/config/hooks/useAuth'
import { useEffect } from 'react'

export default function User() {
   const { getUserInfo } = useAuth()

   useEffect(() => {
        console.log(getUserInfo)
   }, []) 

   const (email, displayName, photoURL) = getUserInfo()
   return <>
   
    <p>{getUserInfo().email}</p>
    <p>{getUserInfo().displayName}</p>
    <img src={getUserInfo().photoURL}/>
   </>
}