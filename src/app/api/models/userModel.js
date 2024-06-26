import mongoose from "mongoose";

const userSchem = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
});

const user = mongoose.model("user", userSchem);

export default user;
