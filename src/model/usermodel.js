import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: Number,
    default: "",
  },
  password: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
