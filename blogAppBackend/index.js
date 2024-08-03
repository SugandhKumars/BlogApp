const express = require("express");
const app = express();
const db = [
  {
    name: "learn-js",
    heading: "Learn JavaScript",
    upvote: 0,
    comments: [],
    Content:
      "loremdfnsdnfkjndskjfnksdnfjklanslnalksndlkasnflkdnanfnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
  },
  {
    name: "learn-node",
    heading: "Learn Node",
    upvote: 0,
    comments: [],
    Content:
      "loremdfnsdnfkjndskjfnksdnfjklanslnalksndlkasnflkdnanfnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
  },
  {
    name: "learn-mongo",
    heading: "Learn Database with Mongodb",
    upvote: 0,
    comments: [],
    Content:
      "loremdfnsdnfkjndskjfnksdnfjklanslnalksndlkasnflkdnanfnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
  },
];
app.use(express.json);
app.get("/api/blog/:name", (req, res) => {
  const { name } = req.params;
  const blog = db.find((article) => article.name == name);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).send("Blog not found");
  }
});
app.put("/api/blog/:name/upvote", (req, res) => {
  const { name } = req.params;
  const blog = db.find((article) => article.name == name);
  if (blog) {
    blog.upvote++;
    res.send(`the blog ${name} has ${blog.upvote} upvote`);
  } else {
    res.status(404).send("Blog not found");
  }
});
app.post("/api/blog/:name/comment", (req, res) => {
  const { name } = req.params;
  const { username, text } = req.body;
  const blog = db.find((article) => article.name == name);
  if (blog) {
    blog.comments.push({ username, text });
    res.json(blog.comments);
  } else {
    res.status(404).send("Blog not found");
  }
});
app.listen(8000, () => console.log("app is listen on port 8000"));
