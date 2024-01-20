const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

// for creating new post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedPost = await BlogPost.update(
      {
        // Update the fields you want to change
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    if (updatedPost[0] === 0) {
      // If no rows were updated, it means the post does not exist or the user is not authorized
      return res.status(404).json({ message: 'Post not found or you are not authorized to update it.' });
    }

    // Fetch the updated post to send it back in the response
    const updatedPostData = await BlogPost.findByPk(req.params.id);

    res.status(200).json(updatedPostData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// for delete post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const reviewData = await BlogPost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!reviewData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
