"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-red">Home Page</h1>
      <Link href={"/login"}>Go to Login Page</Link>
      <br/>
      <Link href={"/about"}>Go to About Page</Link>
      <br/>
      <button onClick={()=>alert("hello")}>Click me</button>
    </main>
  );
}
