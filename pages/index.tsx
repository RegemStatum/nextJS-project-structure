import Link from "next/link";
import React, { FC } from "react";

const Index: FC = () => {
  return (
    <div>
      Hello from home{" "}
      <Link href="/products">
        <a>Products</a>
      </Link>
    </div>
  );
};

export default Index;
