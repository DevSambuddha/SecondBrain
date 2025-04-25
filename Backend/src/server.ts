import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./models/mongo";
import { userModel, contentModel } from "./models/mongo";
import { JWT_SECRET, SERVER_PORT } from "./config";
import { userMiddleware } from "./middleware/middleware";

const app = express();

app.use(express.json());
// app.use()

app.post("/api/v1/signup", async (req, res) => {
  const { email, password } = req.body;
  const user = { email, password };
  try {
    const createdUser = await userModel.create(user);
    const token = jwt.sign({ id: createdUser._id }, JWT_SECRET!);
    res.json({
      message: "User created successfully",
      token,
    });
  } catch (e) {
    res.status(411).json({ message: "User already exists" });
  }
});
app.post("/api/v1/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = { email, password };

  const existingUser = await userModel.findOne(user);

  if (existingUser) {
    const token = jwt.sign({ id: existingUser._id }, JWT_SECRET!);
    res.json(token);
  } else {
    res.status(403).json({ message: "Incorect credentials" });
  }
});
app.post("/api/v1/content", userMiddleware, async (req, res) => {
  const type = req.body.type;
  const link = req.body.link;
  await contentModel.create({
    type,
    link,
    title: req.body.title,
    tags: [],
    userId: req.userId,
  });
  res.json({ message: "Content Added!" });
});
app.get("/api/v1/content", userMiddleware, async (req, res) => {
  const userId = req.userId;
  const content = await contentModel
    .find({ userId: userId })
    .populate("userId", "email");
  res.json({ content });
});
app.delete("/api/v1/content", userMiddleware, async (req, res) => {
  const contentId = req.body.contentId;
  await contentModel.deleteMany({
    contentId,
    userId: "req.userId",
  });
  res.json({ message: "Deleted" });
});
app.post("/api/v1/brain/share", (req, res) => {});
app.get("/api/v1/brain/:shareLink", (req, res) => {});

const PORT = SERVER_PORT;

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
  });
})();
