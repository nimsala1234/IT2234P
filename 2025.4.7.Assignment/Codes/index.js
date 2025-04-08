const express = require('express');
const app = express();
const PORT = 8080;

const userRoutes = require('./User/userRoute');
const postRoutes = require('./Post/postRoute');

app.use('/user', userRoutes);
app.use('/post', postRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});