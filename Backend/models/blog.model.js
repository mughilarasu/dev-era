const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  body: {
    type: String,
  },
  email: {
    type: String,
  },
  name: {
    type: String,
  },
});

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  comments: [commentSchema],
  date: {
    type: Date,
    required: true,
  },
});

const blogSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    posts: [postSchema],
  },
  {
    timestamps: true,
  }
);

const blog = mongoose.model("blog", blogSchema);

module.exports = blog;
