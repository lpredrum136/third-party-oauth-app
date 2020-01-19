const express = require('express');
const router = express.Router();
const config = require('config');
const axios = require('axios');

// @route   GET api/oauth
// @desc    Generate oauth link
// @access  Public
router.get('/', async (req, res) => {
  const client_id = config.get('CLIENT_ID');
  const scopes = config.get('SCOPES');
  const redirect_uri = config.get('REDIRECT_URI');

  res.json({
    authUrl: `http://localhost:8081/#/app/authorise?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&scopes=${scopes}`
  });
});

// @route   POST api/oauth
// @desc    Exchange code for token
// @access  Public
router.post('/', async (req, res) => {
  const authorisation_code = req.body.authorisation_code;
  const client_id = config.get('CLIENT_ID');
  const client_secret = config.get('CLIENT_SECRET');
  const redirect_uri = config.get('REDIRECT_URI');
  const scopes = config.get('SCOPES');

  try {
    const response = await axios.post(
      'http://localhost/cioauth/api/app/exchange_token',
      {
        grant_type: 'authorization_code',
        authorisation_code,
        client_id,
        client_secret,
        redirect_uri,
        scopes
      }
    );

    res.json(response.data);
  } catch (error) {
    console.log('ERRORRRRR===========88888888888888888=================');
    console.log(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
