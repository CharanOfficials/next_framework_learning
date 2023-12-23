import React from "react";
import styles from "../login.module.css";
import StudentList from "../studentlist/page";
const Student = () => {
  return (
    <div>
      <h1 className={styles.heading}>Student</h1>
      <StudentList />
    </div>
  );
};

export default Student;
