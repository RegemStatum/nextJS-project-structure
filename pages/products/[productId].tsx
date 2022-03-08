import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SingleProduct: NextPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div>
      SingleProduct index is : {productId}
      <Link href={"/"}>
        <a>To Index</a>
      </Link>
      <Link href={"/home"}>
        <a>To Home Page</a>
      </Link>
    </div>
  );
};

export default SingleProduct;
