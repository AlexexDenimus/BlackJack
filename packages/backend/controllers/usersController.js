const usersService = require('../services/usersService');
const express = require('express');
const router = express.Router();

/**
 GET /services
 */
async function fetchUsers(req, res, next) {
  try {
    const users = await usersService.fetchUsers();

    res.json({ users });
  } catch (error) {
    next(error);
  }
}

/**
 GET /barbers/:targetId
 */

/**
 POST /barbers
 */

/**
 UPDATE /barbers/:targetId
 */

/**
 DELETE /barbers/:targetId
 */

/**
 * Initialize routes of articles controller.
 */

router.get('/', fetchUsers);

module.exports = router;
