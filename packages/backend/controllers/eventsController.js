const eventsService = require('../services/eventsService');
const express = require('express');
const router = express.Router();

/**
 GET /events
 */
async function getEvents(req, res, next) {
  try {
    const events = await eventsService.fetchEvents();

    res.json({ events });
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

router.get('/', getEvents);

module.exports = router;
