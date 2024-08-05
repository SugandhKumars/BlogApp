import React from "react";

function Comments({ Comments }) {
  return (
    <div>
      {Comments?.map((comment) => (
        <div className="mb-4" key={Math.random()}>
          <h3 className="text-xl font-medium "> {comment?.user}</h3>
          <p className="text-sm ml-2">{comment?.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
