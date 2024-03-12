"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function Login() {
    const router=useRouter()
  return (
    <div><h1> this is a login pageLogin Page</h1>
        <br/>
         <Link href={"/about"}>Go to About Page</Link>
         <br/>
         <button onClick={()=>router.push('/login/loginstudent')}>Go to Login Stdent Page</button>
         <br/>
        <button onClick={()=>router.back()}>Back</button>
    </div>
  )
}

export default Login