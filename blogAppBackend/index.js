const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Allow only your frontend's origin
  })
);
app.get("/api/blog/:name", async (req, res) => {
  const { name } = req.params;
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();
  const db = client.db("blogApp");
  const blog = await db.collection("blogs").findOne({ name });
  if (blog) {
    res.json({ blog });
  }
});
app.put("/api/blog/:name/upvote", async (req, res) => {
  const { name } = req.params;
  const client = new MongoClient("mongodb://127.0.0.1:27017/");
  await client.connect();
  const db = client.db("blogApp");
  await db.collection("blogs").updateOne(
    { name },
    {
      $inc: { upvote: 1 },
    }
  );
  const blog = await db.collection("blogs").findOne({ name });
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).send("Blog not found");
  }
});
app.post("/api/blog/:name/comment", async (req, res) => {
  const { name } = req.params;
  const { user, text } = req.body;
  const client = new MongoClient("mongodb://127.0.0.1:27017/");
  await client.connect();
  const db = client.db("blogApp");
  await db.collection("blogs").updateOne(
    { name },
    {
      $push: { comments: { user, text } },
    }
  );
  const blog = await db.collection("blogs").findOne({ name });
  if (blog) {
    res.send(blog.comments);
  } else {
    res.status(404).send("Blog not found");
  }
});
app.listen(8000, () => console.log("app is listen on port 8000"));
