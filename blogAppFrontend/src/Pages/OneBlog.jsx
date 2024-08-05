import React, { useEffect, useState } from "react";
import Blogs from "../blogs.json";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comments from "../Components/Comments";
import AddComment from "../Components/AddComment";
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
  }, [blogId]);

  async function upvote() {
    const res = await axios.put(
      `http://localhost:8000/api/blog/${blogId}/upvote`
    );
    const updated = res.data;

    setArticle(updated);
  }
  const blog = Blogs.find((blo) => blo.name === blogId);
  console.log(article);
  return (
    <div className="  w-[50%] mx-auto border-2 rounded-lg p-2 mt-2">
      <h3 className="font-bold text-2xl text-center mb-3">{blog.heading}</h3>
      <p className="break-words">{blog.Content}</p>
      <button className="cursor-pointer" onClick={upvote}>
        ⬆{article.blog?.upvote || article.upvote}
      </button>
      <h2 className="text-2xl font-bold underline my-4">Comments:</h2>
      <AddComment
        blogId={blogId}
        onUpdatedArticle={(data) => setArticle(data)}
      />
      <Comments Comments={article?.blog?.comments || article?.comments} />
    </div>
  );
}

export default OneBlog;
