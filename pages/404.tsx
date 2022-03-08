import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div>
      This page doesnt exist!{" "}
      <Link href="/">
        <a>To home</a>
      </Link>{" "}
    </div>
  );
};

export default Error;
