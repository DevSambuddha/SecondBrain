import mongoose, { Schema, model } from "mongoose";
import { MONGODB_DB } from "../config";

const connectDB = async () => {
  await mongoose.connect(MONGODB_DB);
  console.log("Connected to Database!");
};

export interface User {
  email: string;
  password: string;
}

export interface Content {
  type: string;
  link: string;
  title: string;
  tags: mongoose.Types.ObjectId[];
  userId: mongoose.Types.ObjectId;
}

const userSchema = new Schema<User>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const contentSchema = new Schema<Content>(
  {
    type: {
      type: String,
      enum: ["document", "tweet", "youtube", "link"],
      required: true,
    },
    link: { type: String, required: true },
    title: { type: String, required: true },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const userModel = model<User>("User", userSchema);
export const contentModel = model<Content>("Content", contentSchema);

export default connectDB;
