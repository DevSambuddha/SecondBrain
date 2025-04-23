import mongoose from "mongoose";

const Schema = mongoose.Schema;
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodb!);
    console.log("Connected to Database!");
  } catch (error) {
    console.log("Could not connect the db:", error);
  }
};

const ObjectId = mongoose.Types.ObjectId;

interface User {
  email: string;
  password: string;
}

interface Content {
  type: string;
  link: string;
  title: string;
  tags: string[];
}

const userSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const contentSchema = new Schema<Content>({
  type: {
    type: String,
    enum: ["document", "tweet", "youtube", "link"],
    required: true,
  },
  link: { type: String, required: true },
  title: { type: String, required: true },
  tags: [{ type: String, required: true }],
});

const userModel = mongoose.model("user", userSchema);

export { userModel };
export default connectDB;
