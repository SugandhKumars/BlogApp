import React, { useEffect, useState } from "react";
import Blogs from "../blogs.json";
import { useParams } from "react-router-dom";
import axios from "axios";
function OneBlog() {
  const [article, setArticle] = useState({ upvote: 0, comments: [] });
  const { blogId } = useParams();
  useEffect(() => {
    const getArticle = async () => {
      const res = await axios.get(`http://localhost:8000/api/blog/${blogId}`);
      const articleInfo = res.data;
      setArticle(articleInfo);
    };
    getArticle();
  }, []);

  async function upvote() {
    const res = await axios.put(
      `http://localhost:8000/api/blog/${blogId}/upvote`
    );
    const updated = res.data;
    setArticle(updated);
  }
  const blog = Blogs.find((blo) => blo.name === blogId);

  return (
    <div className="  w-[50%] mx-auto border-2 rounded-lg p-2 mt-2">
      <h3 className="font-bold text-2xl text-center mb-3">{blog.heading}</h3>

      <p className="break-words">{blog.Content}</p>
      <button className="cursor-pointer" onClick={upvote}>
        ⬆
      </button>
      <p>this article{article?.blog?.upvote}</p>
    </div>
  );
}

export default OneBlog;
