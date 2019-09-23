const barbersService = require('../services/barbersService');
const express = require('express');
const router = express.Router();

/**
 GET /barbers
 */
async function fetchBarbers(req, res, next) {
  try {
    const barbers = await barbersService.fetchBarbers();

    res.json({barbers});
  } catch (error) {
    next(error);
  }
}

/**
 GET /barbers/:targetId
 */
async function fetchBarber(req, res, next) {
  try {
    const barber = await barbersService.fetchBarber(
      req.params.publicId
    );

    res.json({barber});
  } catch (error) {
    next(error);
  }
}

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
  router.get('/', fetchBarbers);
  
  router.get('/:publicId', fetchBarber);

  module.exports = router;