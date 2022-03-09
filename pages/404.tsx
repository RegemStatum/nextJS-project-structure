import Link from "next/link";
import React from "react";
import styles from "../styles/pages/error.module.scss";

const Error = () => {
  return (
    <div className={styles.container}>
      This page doesnt exist!{" "}
      <Link href="/">
        <a>To home</a>
      </Link>{" "}
    </div>
  );
};

export default Error;
