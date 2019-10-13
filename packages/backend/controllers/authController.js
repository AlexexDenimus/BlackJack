const express = require('express');

const usersService = require('../services/usersService');
const router = express.Router();

/**
 * LOGIN /login
 */

async function loginUser(req, res, next) {
  try {
    const user = await usersService.loginUser(req.body);

    res.json(user);
  } catch (error) {
    next(error);
  }
}

/**
 * Initialize routes of articles controller.
 */

router.post('/login', loginUser);

module.exports = router;
