"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function LoginTeacher() {
    const router=useRouter()
  return (
    <div>Login Page for tuddent
        <br/>
        
        <button onClick={()=>router.back()}>Back</button>
    </div>
  )
}

export default LoginTeacher