const express = require('express');
const router = express.Router();
const { getCommentsWithCommentators } = require('./postService');

router.get('/:postId', (req, res) => {
    const {postId} = req.params;
    const result = getCommentsWithCommentators(postId);

    if (!result || result.length === 0) {
        return res.status(404).json({ error: 'Post not found or has no comments' });
    }
    
    res.json(result);
});

module.exports = router;