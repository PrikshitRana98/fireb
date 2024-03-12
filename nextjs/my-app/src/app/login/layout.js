"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function Layout({children}) {
  const router=useRouter()
  return (
    <div style={{flexDirection:"row",justifyContent:"space-evenly"}}>
      <Link href={"/login/loginTeacher"}>Login tsdo Teacher</Link>
      <Link href={"/login/loginstudent"} style={{margin:20}}>Login to Student</Link>
      <button onClick={() => router.push('/login/loginstudent')}>loginstudent</button>
      {children}
    </div>
  )
}

export default Layout