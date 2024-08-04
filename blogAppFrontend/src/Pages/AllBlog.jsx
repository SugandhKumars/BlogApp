import React from "react";
import Blogs from "../blogs.json";

import { Link } from "react-router-dom";
function Blog() {
  console.log(Blogs);
  return (
    <>
      {Blogs.map((blog, i) => (
        <Link to={`/blog/${blog.name}`} key={i}>
          <div className="border-2 rounded-lg self-center m-2 p-2 cursor-pointer w-[70%] mx-auto">
            <h3 className="font-bold text-2xl">{blog.heading}</h3>
            <p className="break-words">{blog.Content}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Blog;
