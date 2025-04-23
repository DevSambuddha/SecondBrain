import express from "express";
import jwt from "jsonwebtoken";
import connectDB from "./models/mongo";
require("dotenv").config();

const app = express();

app.use(express.json());
// app.use()

app.post("/api/v1/signup", (req, res) => {
  const { email, password } = req.body;
  const user = { email, password };
  jwt.sign(user, process.env.JWT_SECRET!);
  res.json({ user });
});
app.post("/api/v1/signin", (req, res) => {});
app.post("/api/v1/content", (req, res) => {});
app.get("/api/v1/content", (req, res) => {});
app.delete("/api/v1/content", (req, res) => {});
app.post("/api/v1/brain/share", (req, res) => {});
app.get("/api/v1/brain/:shareLink", (req, res) => {});

const PORT = process.env.PORT || 3000;

async () => {
  app.listen(PORT);
  console.log(`Server started on PORT ${PORT}`);
  await connectDB();
};
