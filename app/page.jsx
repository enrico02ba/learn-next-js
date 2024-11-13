import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="my-2">
      <Link className="btn btn-accent mx-5" href="/about">
        About
      </Link>
      <Link className="btn btn-accent" href="/category">
        Category
      </Link>
    </div>
  );
};

export default HomePage;
