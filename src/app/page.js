"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("Manjeet");
  const navigation = (name) => {
    router.push(name);
  };
  const fruits = (item) => {
    setName(item);
  };
  const InnerComponent = () => {
    return <div>Inner Component</div>;
  };
  return (
    <main className={styles.main}>
      <h1>Home Page {name}</h1>
      <button onClick={() => fruits("apple")}>Hello</button>
      {InnerComponent()}
      <Link href="/login">Go to login</Link>
      <Link href="/about">Go to about</Link>
      <Link href={"/login/productlist"}>Product List</Link>
      <button onClick={() => navigation("about")}></button>
      <button onClick={() => navigation("login")}></button>
    </main>
  );
}
