const express = require('express');
const cors = require('cors');

// Routes
const posts = require('./routes/api/posts');

// Start app
const app = express();

// Init middleware
app.use(express.json());
app.use(cors());

// Define routes
app.use('/api/posts', posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
