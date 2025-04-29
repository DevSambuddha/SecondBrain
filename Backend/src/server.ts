import express, { Request, response, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import connectDB, { shareModel } from "./models/mongo";
import { userModel, contentModel } from "./models/mongo";
import { JWT_SECRET, SERVER_PORT } from "./config";
import { userMiddleware } from "./middleware/middleware";
import { randomString } from "./Utils";

const app = express();

app.use(express.json());

app.post("/api/v1/signup", async (req: Request, res: Response) => {
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
app.post("/api/v1/signin", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = { email, password };

  const existingUser = await userModel.findOne(user);

  if (existingUser) {
    const token = jwt.sign({ id: existingUser._id }, JWT_SECRET!);
    res.json({ message: "Signed in successfully", token });
  } else {
    res.status(403).json({ message: "Incorect credentials" });
  }
});
app.post(
  "/api/v1/content",
  userMiddleware,
  async (req: Request, res: Response) => {
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
  }
);
app.get(
  "/api/v1/content",
  userMiddleware,
  async (req: Request, res: Response) => {
    const userId = req.userId;
    const content = await contentModel
      .find({ userId: userId })
      .populate("userId", "email");
    res.json({ content });
  }
);
app.delete(
  "/api/v1/content",
  userMiddleware,
  async (req: Request, res: Response) => {
    const contentId = req.body.contentId;
    await contentModel.deleteMany({
      contentId,
      userId: "req.userId",
    });
    res.json({ message: "Deleted" });
  }
);
app.post(
  "/api/v1/share",
  userMiddleware,
  async (req: Request, res: Response) => {
    const share = req.body.share;

    if (share) {
      const existingLink = await shareModel.findOne({
        userId: req.userId,
      });
      if (existingLink) {
        res.json({ message: "Already Shared", hash: existingLink.hash });
      }
      const hash = randomString(10);
      await shareModel.create({
        userId: req.userId,
        hash: hash,
      });

      res.json({ message: "Shared", hash });
    } else {
      await shareModel.deleteOne({
        userId: req.userId,
      });
      res.json({ message: "Unshared" });
    }
  }
);
app.get("/api/v1/:shareLink", async (req: Request, res: Response) => {
  const hash = req.params.shareLink;
  const share = await shareModel.findOne({ hash });

  if (!share) {
    res.status(411).json({ message: "Share link not found" });
    return; //early return
  }
  const user = await userModel.findOne({ _id: share.userId });
  const content = await contentModel.find({ userId: share.userId });
  if (!user) {
    res
      .status(411)
      .json({ message: "User not found,error should ideally not happen" });
    return;
  }
  res.json({
    username: user.email,
    content,
  });
});

const PORT = SERVER_PORT;

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
  });
})();
