import axios from "axios";
import React, { useEffect, useState } from "react";

function AddComment({ blogId, onUpdatedArticle }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  async function postComment() {
    const res = await axios.post(
      `http://localhost:8000/api/blog/${blogId}/comment`,
      {
        user: name,
        text: comment,
      }
    );
    const data = res.data;
    onUpdatedArticle(data);
    setName("");
    setComment("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="UserName"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={postComment}>Add Comment</button>
    </div>
  );
}

export default AddComment;
