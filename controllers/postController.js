const { Post } = require('../Models')



const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    return res.json(posts);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (post) {
      res.json(post);
    } else {
      return res.json(404).send("Post with the specified ID does not exist");
    }
  } catch (e) {
    console.log(e);
    return res.status(500).send(e.message);
  }
};

const createPost = async (req, res) => {
  try {
    const {
      lat,
      lon,
      post_date,
      post_time,
      user_account,
      incident_type,
      comment,
    } = req.body;
    const post = await Admin.create({
      lat,
      lon,
      post_date,
      post_time,
      user_account,
      incident_type,
      comment,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePost = async (req, res) => {
    try {
        let { id } = req.params
        let post = await Post.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )
        if (!post) {
            return res.status(404).json({ message: 'Post not found'})
        }
        return res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    return res.status(200).send("Post deleted successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPostByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Post.find({ user_account: userId });
    if (posts) {
      res.json(posts);
    } else {
      return res
        .status(404)
        .send("Posts with the specified user ID do not exist");
    }
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getPostByUser,
};
