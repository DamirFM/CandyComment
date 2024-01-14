const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../models');

const userData = require('./userData.json');
const blogPost = require('./blogPosts.json');
const commentData = require('./commentsData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of blogPost) {
    console.log(post)
    await BlogPost.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  };
  const posts = await BlogPost.findAll()
  console.log(posts)
  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      blogPost_id: posts[Math.floor(Math.random() * posts.length)].id,
    });
  };


  process.exit(0);
};

seedDatabase();
