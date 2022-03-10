import React, { FC, useEffect, useState } from "react";
import styles from "./github-users.module.scss";

const GithubUsers: FC<{ users: any[] }> = ({ users }) => {
  return (
    <div className={styles.container}>
      {users.map((user: any) => (
        <div key={user.id}>
          <p>{user.login}</p>
        </div>
      ))}
    </div>
  );
};

export default GithubUsers;
