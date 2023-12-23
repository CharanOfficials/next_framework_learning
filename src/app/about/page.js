"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const About = () => {
  const router = useRouter();
  const navigator = (name) => {
    router.push(name);
  };
  return (
    <div>
      <h1>About</h1>
      <Link href="/login">Go to Login</Link>
      <button onClick={() => navigator("about/student")}>About Student</button>
      <button onClick={() => navigator("about/college")}>About College</button>
    </div>
  );
};

export default About;
