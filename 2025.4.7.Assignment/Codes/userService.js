const users = require('./users');
const posts = require('../Post/posts');
const comments = require('../Comment/comments');

function getUserSummary(userId) {
    const user = users.find(u => u.id === userId);

    if (!user) {
        return null;
    }

    const postCount = posts.filter(post => post.authorId === userId).length;
    const commentCount = comments.filter(comment => comment.userId === userId).length;

    return {
        id: user.id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        "Number of Posts:": postCount,
        "Number of Comments:": commentCount
    };
}

module.exports = {
    getUserSummary
};