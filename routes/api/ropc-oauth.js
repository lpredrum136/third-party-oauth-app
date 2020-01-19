const express = require('express');
const router = express.Router();
const config = require('config');

// @route   GET api/ropc-oauth
// @desc    Get client info
// @access  Public
router.get('/', async (req, res) => {
  const client_id = config.get('CLIENT_ID');
  const client_secret = config.get('CLIENT_SECRET');
  const redirect_uri = config.get('REDIRECT_URI');
  const scopes = config.get('SCOPES');

  res.json({ client_id, client_secret, redirect_uri, scopes });
});

module.exports = router;
