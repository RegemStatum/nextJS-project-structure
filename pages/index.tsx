import Link from "next/link";
import React, { FC } from "react";
import styles from "../styles/pages/home.module.scss";

const Index: FC = () => {
  return (
    <div className={styles.container}>
      Hello from home{" "}
      <Link href="/products">
        <a>Products</a>
      </Link>
    </div>
  );
};

export default Index;
