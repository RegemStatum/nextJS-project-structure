import Link from "next/link";
import React from "react";

const AllProducts = () => {
  return (
    <div>
      AllProducts{" "}
      <Link href="/">
        <a>To home</a>
      </Link>
    </div>
  );
};

export default AllProducts;
