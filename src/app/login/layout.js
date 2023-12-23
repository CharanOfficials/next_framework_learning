"use client";
import React from "react";
import Link from "next/link";
import styles from "./login.module.css";
const Layout = ({ children }) => {
  return (
    <div>
      <ul className={styles.login_menu}>
        <h4>Login Menu</h4>
        <li>
          <Link href="/login/student">Student</Link>
        </li>
        <li>
          <Link href="/login/teacher">Teacher</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
