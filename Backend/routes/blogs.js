const router = require("express").Router();
let blog = require("../models/blog.model");

router.route("/").get((req, res) => {
  blog
    .find()
    .then((blog) => res.json(blog))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id/get").get((req, res) => {
  blog
    .findById(req.params.id)
    .then((blog) => res.json(blog))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addBlogs").post((req, res) => {
  const username = req.body.username;
  const posts = req.body.posts.map((post, i) => {
    return {
      title: post.title,
      description: post.description,
      content: post.content,
      comments: post.comments.map((comment, j) => {
        return {
          body: comment.body,
          email: comment.email,
          name: comment.name,
        };
      }),
      date: Date.parse(post.date),
    };
  });

  const newBlog = new blog({ username, posts });
  newBlog
    .save()
    .then((blog) => res.json("blog added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id/update").post((req, res) => {
  blog
    .findById(req.params.id)
    .then((updatedData) => {
      updatedData.username = req.body.username;
      updatedData.posts = req.body.posts.map((post, i) => {
        return {
          title: post.title,
          description: post.description,
          content: post.content,
          comments: post.comments.map((comment, j) => {
            return {
              body: comment.body,
              email: comment.email,
              name: comment.name,
            };
          }),
          date: Date.parse(post.date),
        };
      });

      updatedData
        .save()
        .then((blog) => res.json("blog added!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error :" + err));
});

module.exports = router;
