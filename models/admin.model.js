import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  mno: {
    type: Number,
    required: true,
  },
});

const Admin = model("user", userSchema);

export default Admin;
