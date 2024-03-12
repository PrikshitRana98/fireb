"use client";
import { useRouter } from "next/navigation";
import React from "react";

function About() {
  const router = useRouter();
  return (
    <div>
      About Page
      <br />
      <button onClick={() => router.back()}>Back</button>
      <br/>
      <button onClick={() => router.push('/about/aboutcollege')}>About College</button>
      <br/>
       <br/>
      <button onClick={() => router.push('/about/aboutstudent')}>About Student</button>
    </div>
  );
}

export default About;
