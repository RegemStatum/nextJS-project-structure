import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";
import styles from "../styles/pages/home.module.scss";
import cocktail1 from "../public/images/cocktail1.jpg";
import GithubUsers from "../components/GithubUsers/GithubUsers";
import { NextPage } from "next";

const Index: NextPage<{ users: { [key: string]: any }[] }> = ({ users }) => {
  return (
    <div className={styles.container}>
      Hello from home
      <Link href="/products">
        <a>Products</a>
      </Link>
      <Image
        src={cocktail1}
        alt="my favourite cocktail"
        placeholder="blur"
        priority
      />
      <Image
        src="/images/cocktail2.jpg"
        alt="cocktail"
        width="130"
        height="130"
        placeholder="blur"
        blurDataURL="/images/cocktail2.jpg"
      />
      <GithubUsers users={users} />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://api.github.com/users");
  const users = await response.json();

  return { props: { users } };
}

export default Index;
