const express = require('express');
const cors = require('cors');

// Routes
// const posts = require('./routes/api/posts');
const oauth = require('./routes/api/oauth');
const ropcOauth = require('./routes/api/ropc-oauth');

// Start app
const app = express();

// Init middleware
app.use(express.json());
app.use(cors());

// Define routes
// app.use('/api/posts', posts);
app.use('/api/oauth', oauth);
app.use('/api/ropc-oauth', ropcOauth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
