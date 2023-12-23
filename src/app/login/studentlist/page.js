import React from "react";
import Link from "next/link";
import styles from "../login.module.css";
const StudentList = () => {
  const names = ["Anil", "Charan", "Chetan"];
  return (
    <div>
      <h1>Student List</h1>
      <ul className={styles.user_list}>
        {names.map((name, i) => {
          return (
            <Link href={`/login/studentlist/${name}`} key={i}>
              {name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default StudentList;
