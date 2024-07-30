import React from "react";
import Blogs from "../blogs.json";
import { useParams } from "react-router-dom";
function OneBlog() {
  const { blogId } = useParams();
  const blog = Blogs.find((blo) => blo.name === blogId);

  return (
    <div>
      <h3 className="font-bold text-2xl">{blog.heading}</h3>
      <p>{blog.Content}</p>
    </div>
  );
}

export default OneBlog;
